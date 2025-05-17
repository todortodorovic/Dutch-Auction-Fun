use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Mint, Transfer, transfer};

declare_id!("YourProgramIDReplaceMe111111111111111111111111111");

#[program]
pub mod dutch_auction {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        starting_price: u64,
        discount_rate: u64,
    ) -> Result<()> {
        let auction = &mut ctx.accounts.auction;
        auction.seller = *ctx.accounts.seller.key;
        auction.starting_price = starting_price;
        auction.discount_rate = discount_rate;
        auction.start_time = Clock::get()?.unix_timestamp;
        auction.duration = 7 * 24 * 60 * 60; // 7 days
        auction.nft_mint = ctx.accounts.nft_mint.key();
        auction.nft_vault = ctx.accounts.nft_vault.key();
        Ok(())
    }

    pub fn buy(ctx: Context<Buy>) -> Result<()> {
        let auction = &mut ctx.accounts.auction;
        let now = Clock::get()?.unix_timestamp;
        require!(now < auction.start_time + auction.duration, AuctionError::AuctionEnded);

        let elapsed = now - auction.start_time;
        let discount = auction.discount_rate.checked_mul(elapsed as u64).unwrap();
        let current_price = auction.starting_price.checked_sub(discount).unwrap_or(0);
        require!(ctx.accounts.buyer.lamports() >= current_price, AuctionError::InsufficientFunds);

        // Transfer SOL to seller
        **ctx.accounts.buyer.try_borrow_mut_lamports()? -= current_price;
        **ctx.accounts.seller.try_borrow_mut_lamports()? += current_price;

        // Refund excess
        let excess = ctx.accounts.buyer.lamports().saturating_sub(current_price);
        if excess > 0 {
            **ctx.accounts.buyer.try_borrow_mut_lamports()? += excess;
            **ctx.accounts.system_program.to_account_info().try_borrow_mut_lamports()? -= excess;
        }

        // Transfer NFT to buyer
        let cpi_accounts = Transfer {
            from: ctx.accounts.nft_vault.to_account_info(),
            to: ctx.accounts.buyer_nft_account.to_account_info(),
            authority: ctx.accounts.seller.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(ctx.accounts.token_program.to_account_info(), cpi_accounts);
        transfer(cpi_ctx, 1)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = seller, space = 8 + 96)]
    pub auction: Account<'info, Auction>,
    #[account(mut)]
    pub seller: Signer<'info>,
    pub nft_mint: Account<'info, Mint>,
    #[account(mut)]
    pub nft_vault: Account<'info, TokenAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Buy<'info> {
    #[account(mut)]
    pub auction: Account<'info, Auction>,
    #[account(mut)]
    pub seller: AccountInfo<'info>,
    #[account(mut)]
    pub buyer: Signer<'info>,
    #[account(mut)]
    pub nft_vault: Account<'info, TokenAccount>,
    #[account(mut)]
    pub buyer_nft_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Auction {
    pub seller: Pubkey,
    pub starting_price: u64,
    pub discount_rate: u64,
    pub start_time: i64,
    pub duration: i64,
    pub nft_mint: Pubkey,
    pub nft_vault: Pubkey,
}

#[error_code]
pub enum AuctionError {
    #[msg("The auction has ended.")]
    AuctionEnded,
    #[msg("Insufficient funds.")]
    InsufficientFunds,
}
