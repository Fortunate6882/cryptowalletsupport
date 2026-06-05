export const articles = [
  {
    slug: "getting-started-trust-wallet",
    category: "Wallet Setup",
    title: "Getting Started with Trust Wallet",
    description: "A complete beginner's guide to setting up Trust Wallet, securing your seed phrase, and making your first transaction safely.",
    readTime: "8 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "What is Trust Wallet?" },
      { type: "p", text: "Trust Wallet is a self-custodial mobile cryptocurrency wallet supporting over 10 million digital assets across 100+ blockchains. Self-custodial means only you control your private keys — no company, including Trust Wallet, can access or freeze your funds." },
      { type: "h2", text: "Step 1 — Download the Official App" },
      { type: "p", text: "Always download Trust Wallet exclusively from the official App Store (iOS) or Google Play Store (Android). Verify the publisher is Trust Wallet. Avoid third-party download links or APK files — these are common sources of malware designed to steal your funds." },
      { type: "h2", text: "Step 2 — Create a New Wallet" },
      { type: "p", text: "Open the app and tap Create a New Wallet. You will be presented with your 12-word recovery phrase (also called a seed phrase). This is the single most important piece of information tied to your wallet." },
      { type: "warning", text: "Critical Warning: Write your seed phrase on paper. Never save it digitally — no screenshots, no cloud storage, no notes apps, no email. Anyone with access to your seed phrase has complete control over all your funds." },
      { type: "h2", text: "Step 3 — Secure Your Wallet" },
      { type: "p", text: "Enable biometric authentication (fingerprint or Face ID) from Settings → Security. Set a strong 6-digit passcode as a backup. Avoid obvious combinations like 123456 or your birth year." },
      { type: "h2", text: "Step 4 — Add Your First Token" },
      { type: "p", text: "Tap the + icon or search for your token in the asset list. For newer tokens, paste the contract address from the official project website." },
      { type: "h2", text: "Step 5 — Receive Crypto" },
      { type: "p", text: "Tap the token you want to receive, then tap Receive. Always double-check the first and last 4 characters of any address before sending." },
      { type: "h2", text: "Step 6 — Send Crypto" },
      { type: "p", text: "Tap Send, enter the recipient address or scan their QR code, enter the amount, and review the network fee." },
      { type: "warning", text: "Network fees are paid to blockchain validators — not to Trust Wallet. Fees vary based on network congestion. You cannot send a token if you have no native coin for fees (e.g., BNB for BEP20 tokens)." },
      { type: "h2", text: "Common Trust Wallet Problems" },
      { type: "p", text: "Insufficient funds for gas — You have the token but no native coin for fees. Add BNB (BEP20), ETH (ERC20), or TRX (TRC20)." },
      { type: "p", text: "Transaction stuck pending — The network fee was too low. Wait for it to resolve or check if Speed Up is available." },
      { type: "p", text: "Token not showing after transfer — The token may not be enabled. Search for it in the asset list and toggle it on." },
      { type: "h2", text: "Keeping Your Wallet Safe" },
      { type: "bullets", items: ["Never share your seed phrase with anyone — ever", "Trust Wallet support will never ask for your seed phrase", "Keep your app updated to the latest version", "Be suspicious of any wallet verification requests"] }
    ]
  },
  {
    slug: "metamask-setup-and-common-fixes",
    category: "Wallet Setup",
    title: "MetaMask Setup and Common Fixes",
    description: "Everything you need to know about installing MetaMask, connecting to networks, and solving the most common issues users face.",
    readTime: "10 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "What is MetaMask?" },
      { type: "p", text: "MetaMask is the world's most widely used Web3 browser extension and mobile wallet. It connects you to Ethereum and EVM-compatible blockchains including BNB Chain, Polygon, Avalanche, and thousands of decentralized applications." },
      { type: "h2", text: "Installing MetaMask Safely" },
      { type: "p", text: "Visit metamask.io directly and click Download. Install only from the official Chrome Web Store, Firefox Add-ons, or Edge Add-ons. Verify the extension has millions of reviews and is published by MetaMask." },
      { type: "warning", text: "Phishing Warning: Hundreds of fake MetaMask extensions and websites exist. Always type metamask.io directly — never click links from emails, Discord messages, or social media." },
      { type: "h2", text: "Creating Your Wallet" },
      { type: "bullets", items: ["Click Create a New Wallet", "Create a strong password — this protects your wallet on this device", "Reveal and write down your 12-word Secret Recovery Phrase on paper", "Confirm the phrase when prompted"] },
      { type: "h2", text: "Adding Networks to MetaMask" },
      { type: "p", text: "MetaMask defaults to Ethereum Mainnet. To add BNB Smart Chain: Network Name: BNB Smart Chain, RPC URL: https://bsc-dataseed.binance.org/, Chain ID: 56, Symbol: BNB. Alternatively, visit chainlist.org to add networks in one click." },
      { type: "h2", text: "Common MetaMask Problems and Fixes" },
      { type: "p", text: "Insufficient funds for gas — Add ETH, BNB, or MATIC to cover network fees depending on your network." },
      { type: "p", text: "Transaction Stuck Pending — Click Speed Up in MetaMask and set a higher gas price, or click Cancel to attempt cancellation." },
      { type: "p", text: "MetaMask Not Connecting to Website — Refresh the page, check if MetaMask is unlocked, try disconnecting and reconnecting the site from Settings → Connected Sites." },
      { type: "p", text: "Tokens Not Showing — Click Import Tokens and enter the contract address from the project's official site." },
      { type: "h2", text: "Security Best Practices" },
      { type: "bullets", items: ["Never import your seed phrase into any website that checks or validates your wallet", "Use a hardware wallet (Trezor or Ledger) for large holdings", "Regularly revoke unnecessary token approvals at revoke.cash", "Use different wallets for DeFi activity and long-term storage"] }
    ]
  },
  {
    slug: "how-to-withdraw-on-binance",
    category: "Transactions",
    title: "How to Withdraw on Binance",
    description: "A step-by-step guide to withdrawing cryptocurrency from Binance, selecting the correct network, and avoiding common withdrawal mistakes.",
    readTime: "7 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "Before You Withdraw" },
      { type: "p", text: "Binance supports withdrawals across dozens of blockchain networks. Selecting the wrong network is the most common and costly mistake users make. Always verify the destination wallet address, that the network matches, and that you have sufficient funds including the withdrawal fee." },
      { type: "h2", text: "Step-by-Step Withdrawal Guide" },
      { type: "p", text: "Step 1 — Log into Binance and complete your login including 2FA verification." },
      { type: "p", text: "Step 2 — Click Wallet in the top navigation, then select Fiat and Spot or search for your asset." },
      { type: "p", text: "Step 3 — Find the coin you want to withdraw and click Withdraw." },
      { type: "p", text: "Step 4 — Paste the receiving wallet address carefully." },
      { type: "warning", text: "Critical: Never type an address manually. Always copy and paste. Verify the first 4 and last 4 characters match after pasting — clipboard hijacking malware exists that replaces addresses silently." },
      { type: "p", text: "Step 5 — Select the correct network. ERC20 (Ethereum, higher fees), BEP20 (BNB Smart Chain, lower fees), TRC20 (TRON, very low fees, common for USDT). The network you choose must match what the destination wallet or exchange accepts." },
      { type: "p", text: "Step 6 — Enter the amount and review all details on the confirmation screen." },
      { type: "p", text: "Step 7 — Complete 2FA verification and confirm your email verification link." },
      { type: "h2", text: "Common Binance Withdrawal Issues" },
      { type: "p", text: "Withdrawal suspended for security review — Binance holds withdrawals for 24-48 hours after security changes. This is standard security protocol." },
      { type: "p", text: "Minimum withdrawal not met — Each coin has a minimum withdrawal amount displayed on the withdrawal page." },
      { type: "h2", text: "Tracking Your Withdrawal" },
      { type: "p", text: "After confirming, Binance provides a Transaction ID (TxID). Use etherscan.io for ETH/ERC20, bscscan.com for BNB/BEP20, or tronscan.org for TRX/TRC20 to track your transaction." }
    ]
  },
  {
    slug: "bybit-withdrawal-explained",
    category: "Transactions",
    title: "Bybit Withdrawal Explained",
    description: "Learn how to withdraw from Bybit correctly, understand withdrawal limits, and troubleshoot common issues including pending and failed withdrawals.",
    readTime: "6 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "Bybit Account Types" },
      { type: "p", text: "Funding Account — Where deposited funds land by default. Withdrawals are made from here. Spot Account — Used for spot trading. Transfer funds to Funding Account before withdrawing. If your withdrawal button is greyed out, go to Assets → Transfer." },
      { type: "h2", text: "Step-by-Step Withdrawal" },
      { type: "bullets", items: ["Log into Bybit and complete 2FA", "Click Assets in the top navigation", "Click Withdraw", "Search for your coin", "Enter the receiving wallet address", "Select the correct network matching your destination", "Enter amount and review the fee", "Complete email + Google Authenticator verification"] },
      { type: "warning", text: "Warning: If you no longer have access to your 2FA device, you will need to go through Bybit's account recovery process which can take several days." },
      { type: "h2", text: "Bybit Withdrawal Limits" },
      { type: "p", text: "No KYC: Very limited or no withdrawals. KYC Level 1: Standard daily limit. KYC Level 2: Higher limits for larger withdrawals. Check your KYC status under Account Settings → Identity Verification." },
      { type: "h2", text: "Common Bybit Withdrawal Problems" },
      { type: "p", text: "Withdrawal temporarily suspended — Check Bybit's official status page for maintenance announcements." },
      { type: "p", text: "Verification email not received — Check spam folder. Add no-reply@bybit.com to your safe senders list." },
      { type: "p", text: "Transaction pending over 2 hours — Check the blockchain explorer using your TxID." },
      { type: "p", text: "Withdrawal cancelled automatically — Verification link expired (usually 30 minutes). Initiate a new withdrawal request." }
    ]
  },
  {
    slug: "using-bitget-wallet-safely",
    category: "Wallet Setup",
    title: "Using Bitget Wallet Safely",
    description: "A complete guide to setting up Bitget Wallet, understanding its multi-chain support, and keeping your assets secure.",
    readTime: "7 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "What is Bitget Wallet?" },
      { type: "p", text: "Bitget Wallet (formerly BitKeep) is a multi-chain self-custodial wallet supporting over 100 blockchains and 20,000+ DApps. Download exclusively from web3.bitget.com or official App Store / Google Play." },
      { type: "warning", text: "Bitget Wallet has been targeted by phishing sites with nearly identical URLs. Always type the address manually or use a trusted bookmark." },
      { type: "h2", text: "Setting Up Your Wallet" },
      { type: "bullets", items: ["Open the app and tap Create Wallet", "Choose a strong password for device access", "Back up your 12-word or 24-word mnemonic phrase — write on paper, store securely offline", "Verify your phrase when prompted", "Enable Face ID or fingerprint for daily access"] },
      { type: "h2", text: "Multi-Chain Features" },
      { type: "p", text: "Bitget Wallet automatically generates wallet addresses for all supported chains under one seed phrase. Your BTC, ETH, BNB, and Solana addresses are all derived from the same 12 words. Always verify you are providing the correct chain address when receiving crypto." },
      { type: "h2", text: "Security Best Practices" },
      { type: "p", text: "Revoke unused approvals every time you interact with a dApp — visit revoke.cash or use Bitget's built-in approval manager to revoke permissions you no longer need." },
      { type: "p", text: "Watch for fake airdrops — If unknown tokens appear in your wallet, do not interact with them. These are often honeypot scams designed to drain your wallet." },
      { type: "h2", text: "Common Bitget Wallet Issues" },
      { type: "p", text: "Tokens not displaying — Add the token manually using its contract address from the official project website." },
      { type: "p", text: "Transaction failing — Insufficient gas is the most common cause. Ensure you have the native coin of the network to cover fees." }
    ]
  },
  {
    slug: "choosing-the-right-network",
    category: "Transactions",
    title: "Choosing the Right Network (ERC20/BEP20/TRC20)",
    description: "Understand the difference between blockchain networks and how to choose the correct one to avoid sending funds to the wrong chain.",
    readTime: "9 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "Why Network Selection Matters" },
      { type: "p", text: "The same token like USDT exists on multiple blockchains simultaneously — ERC20, TRC20, BEP20, Solana, and more. Sending on the wrong network means your funds go to the wrong blockchain and may be inaccessible." },
      { type: "h2", text: "ERC20 — Ethereum Network" },
      { type: "p", text: "Fee token: ETH | Average fee: $5–$30 | Speed: ~15 seconds per block. Best for high-value transactions where security is the priority. Common tokens: USDT, USDC, DAI, LINK, UNI." },
      { type: "h2", text: "BEP20 — BNB Smart Chain" },
      { type: "p", text: "Fee token: BNB | Average fee: $0.10–$0.50 | Speed: ~3 seconds per block. Best for frequent transactions, DeFi, and everyday use." },
      { type: "h2", text: "TRC20 — TRON Network" },
      { type: "p", text: "Fee token: TRX | Average fee: Near zero | Speed: ~3 seconds. Best for USDT transfers and high-volume activity." },
      { type: "h2", text: "How to Choose the Correct Network" },
      { type: "p", text: "Rule 1: Match the network on both ends. If Trust Wallet shows you a TRC20 USDT address, select TRC20 on Binance." },
      { type: "p", text: "Rule 2: Confirm with the receiving exchange. Check their deposit page for supported networks for that specific token." },
      { type: "warning", text: "Never assume. ERC20 and BEP20 addresses look identical — both start with 0x. The network you choose determines which blockchain processes the transaction." },
      { type: "h2", text: "What Happens With the Wrong Network?" },
      { type: "p", text: "ERC20 sent to BEP20 (or vice versa): May be recoverable if the receiving wallet supports both networks under the same seed phrase." },
      { type: "p", text: "Sent to an exchange on the wrong network: Contact exchange support immediately. Most major exchanges can recover this for a fee, taking 3–14 business days." }
    ]
  },
  {
    slug: "how-to-enable-2fa",
    category: "Security",
    title: "How to Enable 2FA on Crypto Exchanges",
    description: "Set up two-factor authentication on major exchanges to protect your account from unauthorized access.",
    readTime: "6 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "Why 2FA is Non-Negotiable" },
      { type: "p", text: "Two-factor authentication adds a second layer of verification beyond your password. Even if someone has your password through a data breach, they cannot access your account without the second factor." },
      { type: "h2", text: "Types of 2FA" },
      { type: "p", text: "Google Authenticator / Authy (Recommended) — Generates a 6-digit code every 30 seconds, stored locally on your device. Most secure option for crypto accounts." },
      { type: "p", text: "SMS 2FA (Avoid if possible) — Vulnerable to SIM-swap attacks where criminals port your phone number to a new SIM to intercept codes." },
      { type: "h2", text: "Setting Up Google Authenticator" },
      { type: "bullets", items: ["Download Google Authenticator or Authy from your App Store", "Log into your exchange and navigate to Security Settings", "Select Enable Google Authenticator", "Scan the QR code with the Authenticator app", "Save your backup codes — store securely offline", "Enter the current 6-digit code to confirm setup"] },
      { type: "h2", text: "Setting Up 2FA on Major Exchanges" },
      { type: "p", text: "Binance: Account → Security → Two-Factor Authentication → Google Authenticator → Enable" },
      { type: "p", text: "Bybit: Account Settings → Security → Google Authentication → Bind" },
      { type: "p", text: "OKX: Profile → Security → Authenticator App → Set Up" },
      { type: "warning", text: "Critical: If you lose your phone without a backup, you will be locked out of your exchange account. Recovery requires identity verification and can take days to weeks." },
      { type: "h2", text: "Lost 2FA Access?" },
      { type: "bullets", items: ["Contact the exchange support immediately", "Prepare government-issued ID for identity verification", "Expect the process to take 2–7 business days", "Never use third-party 2FA recovery services — these are universally scams"] }
    ]
  },
  {
    slug: "10-common-crypto-mistakes",
    category: "Security",
    title: "10 Common Crypto Mistakes to Avoid",
    description: "The most costly errors new and experienced crypto users make — and exactly how to avoid them.",
    readTime: "11 min read",
    updated: "June 2026",
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "The cryptocurrency space is unforgiving. Most transactions are irreversible and there is no central authority for refunds. Understanding the most common mistakes is your first line of defense." },
      { type: "h2", text: "Mistake 1: Sharing Your Seed Phrase" },
      { type: "p", text: "Your seed phrase is the master key to your entire wallet. Anyone who has it owns all your funds permanently. No legitimate service ever asks for it." },
      { type: "h2", text: "Mistake 2: Sending to the Wrong Network" },
      { type: "p", text: "USDT exists on multiple chains. Sending on the wrong network may result in inaccessible funds. Always confirm the network on both the sending and receiving end." },
      { type: "h2", text: "Mistake 3: Not Double-Checking Addresses" },
      { type: "p", text: "Clipboard hijacking malware silently replaces copied wallet addresses. Always verify the first and last 6 characters after pasting. For large transfers, send a small test amount first." },
      { type: "h2", text: "Mistake 4: Storing Seed Phrases Digitally" },
      { type: "p", text: "Screenshots, cloud notes, and email drafts are all vulnerable to hacking and malware. Write seed phrases on paper and store in a fireproof safe or safety deposit box." },
      { type: "h2", text: "Mistake 5: Using Weak or Reused Passwords" },
      { type: "p", text: "Exchanges are regularly targeted in data breaches. Use a unique, strong password (20+ characters) for every exchange. Use a reputable password manager." },
      { type: "h2", text: "Mistake 6: Skipping 2FA" },
      { type: "p", text: "Enable Google Authenticator on every exchange account immediately. Never rely on SMS 2FA alone." },
      { type: "h2", text: "Mistake 7: Falling for Phishing Sites" },
      { type: "p", text: "Bookmark official websites. Never click crypto links from email, Discord, or social media. Check the URL carefully." },
      { type: "h2", text: "Mistake 8: Interacting with Unknown Tokens" },
      { type: "p", text: "Scammers airdrop malicious tokens. When users try to swap them, they unknowingly approve transactions that drain their real holdings. Never interact with tokens you didn't purchase." },
      { type: "h2", text: "Mistake 9: Using Public WiFi" },
      { type: "p", text: "Use mobile data or a trusted VPN for all crypto account access. Never log into exchanges on public WiFi." },
      { type: "h2", text: "Mistake 10: Not Revoking Token Approvals" },
      { type: "p", text: "DeFi approvals remain active indefinitely until revoked. Audit and revoke unnecessary approvals using revoke.cash monthly if you use DeFi regularly." }
    ]
  }
]

export const issues = [
  {
    slug: "withdrawal-stuck",
    title: "My Withdrawal is Stuck",
    severity: "High",
    severityColor: "#ef4444",
    description: "Your withdrawal has been initiated but is not arriving at the destination wallet or exchange.",
    icon: "⏳",
    content: [
      { type: "h2", text: "Understanding Stuck Withdrawals" },
      { type: "p", text: "A withdrawal can appear stuck at several stages — pending on the exchange, broadcast to the blockchain but unconfirmed, or confirmed on chain but not credited at the destination. Each requires a different resolution approach." },
      { type: "h2", text: "Step 1 — Check the Exchange Withdrawal Status" },
      { type: "p", text: "Navigate to Withdrawal History in your exchange. If the status shows Pending, the transaction has not yet been sent to the blockchain." },
      { type: "warning", text: "Most exchanges process withdrawals within 30 minutes. During high-volume periods this can extend to 2 hours. If over 4 hours with Pending status, contact exchange support." },
      { type: "h2", text: "Step 2 — Locate Your Transaction Hash (TxID)" },
      { type: "p", text: "Once the withdrawal status changes to Completed or Sent, the exchange will provide a Transaction Hash. Copy this hash carefully." },
      { type: "h2", text: "Step 3 — Check the Blockchain Explorer" },
      { type: "bullets", items: ["ERC20 transactions: etherscan.io", "BEP20 transactions: bscscan.com", "TRC20 transactions: tronscan.org", "Solana transactions: solscan.io", "Bitcoin transactions: blockchain.info"] },
      { type: "h2", text: "Step 4 — Interpret the Explorer Results" },
      { type: "p", text: "Success — Transaction is confirmed. Issue is on the receiving end. Check network and address." },
      { type: "p", text: "Pending — In queue, usually resolves within 30 minutes. Network congestion may extend this." },
      { type: "p", text: "Failed — Rejected. Funds should return to exchange within 24 hours. Contact exchange if they do not." },
      { type: "h2", text: "Step 5 — If Confirmed But Not Credited" },
      { type: "bullets", items: ["Verify the receiving address matches exactly", "Confirm the network matches what the destination supports", "Check if the receiving exchange requires additional confirmations", "Allow up to 60 minutes for automatic crediting"] },
      { type: "h2", text: "Step 6 — Contact Support" },
      { type: "p", text: "Share your sending exchange, token and amount, TxID, destination address, and network used for the fastest resolution." }
    ]
  },
  {
    slug: "crypto-sent-but-didnt-arrive",
    title: "Crypto Sent But Didn't Arrive",
    severity: "High",
    severityColor: "#ef4444",
    description: "You sent cryptocurrency to a wallet or exchange but the recipient has not received it.",
    icon: "📤",
    content: [
      { type: "h2", text: "First — Confirm the Transaction Was Sent" },
      { type: "p", text: "Check your sending wallet's transaction history. If no transaction appears, the transfer may not have been completed." },
      { type: "warning", text: "If you received a message claiming your funds are held and requesting payment to release them — this is a scam. Legitimate blockchains do not hold transactions in transit." },
      { type: "h2", text: "Step 1 — Get the Transaction Hash" },
      { type: "p", text: "From your sending wallet or exchange, locate the transaction and copy the Transaction Hash (TxID). This is your blockchain receipt." },
      { type: "h2", text: "Step 2 — Verify on Blockchain Explorer" },
      { type: "bullets", items: ["Ethereum / ERC20: etherscan.io", "BNB Chain / BEP20: bscscan.com", "TRON / TRC20: tronscan.org", "Bitcoin: blockchain.info"] },
      { type: "h2", text: "Step 3 — Verify the Recipient Address" },
      { type: "p", text: "Compare the destination address shown in your transaction history with the address you intended to send to. If they match, the funds reached the correct address." },
      { type: "h2", text: "Step 4 — Check the Network" },
      { type: "p", text: "This is the most common reason funds appear missing. If you sent USDT via TRC20 but the receiving exchange only supports ERC20, the funds exist on TRON but are not visible in the expected location." },
      { type: "h2", text: "Step 5 — Wait for Confirmations" },
      { type: "bullets", items: ["Bitcoin: typically 1–3 confirmations required", "Ethereum: typically 12–20 confirmations required", "BNB Chain: typically 15 confirmations required", "TRON: typically 20 confirmations required"] },
      { type: "h2", text: "Step 6 — Contact the Receiving Exchange" },
      { type: "p", text: "If all checks pass, contact the receiving exchange support with your TxID and they can manually credit the deposit." }
    ]
  },
  {
    slug: "sent-to-wrong-network",
    title: "Sent to the Wrong Network",
    severity: "High",
    severityColor: "#ef4444",
    description: "You sent cryptocurrency using the wrong blockchain network.",
    icon: "🔀",
    content: [
      { type: "h2", text: "Understanding the Problem" },
      { type: "p", text: "The same token can exist on multiple blockchains. USDT is available on Ethereum (ERC20), TRON (TRC20), BNB Chain (BEP20), Solana, and Polygon. Sending on the wrong network means funds land on the wrong blockchain." },
      { type: "warning", text: "High Severity: Act promptly but calmly. In many cases, recovery is possible with the correct approach." },
      { type: "h2", text: "Step 1 — Identify What Happened" },
      { type: "bullets", items: ["Which token did you send?", "Which network did you use?", "Which network was expected at the destination?", "Was the destination your own wallet or an exchange?"] },
      { type: "h2", text: "Case A — You Sent to Your Own Wallet" },
      { type: "p", text: "Funds are likely recoverable. Switch to or add the network you accidentally used in your wallet app. Your funds should appear at the same address on that network." },
      { type: "h2", text: "Case B — You Sent to an Exchange" },
      { type: "p", text: "Major exchanges can often recover cross-network deposits. Contact exchange support immediately, provide your deposit address, TxID, token, and network used. Request a manual cross-chain recovery. Most exchanges charge $25–$100 equivalent and process takes 3–14 business days." },
      { type: "h2", text: "Case C — You Sent to Someone Else's Wallet" },
      { type: "p", text: "Contact the recipient and ask them to access their wallet on the network you used. Recovery depends on their cooperation." },
      { type: "h2", text: "Prevention" },
      { type: "bullets", items: ["Confirm the network on the sending side", "Confirm the network accepted at the destination", "Send a small test amount for large transfers"] }
    ]
  },
  {
    slug: "sent-to-wrong-address",
    title: "Sent to the Wrong Address",
    severity: "Critical",
    severityColor: "#7c3aed",
    description: "You accidentally sent cryptocurrency to an incorrect wallet address.",
    icon: "❌",
    content: [
      { type: "h2", text: "Understanding the Situation" },
      { type: "p", text: "Blockchain transactions are designed to be immutable and irreversible. When you send to a wrong address, the transaction is permanently recorded on the blockchain and cannot be reversed by any exchange, wallet provider, or support team." },
      { type: "warning", text: "Critical: Recovery is only possible in specific circumstances. Act quickly but understand the limitations." },
      { type: "h2", text: "Step 1 — Verify the Transaction" },
      { type: "p", text: "Check your wallet or exchange transaction history. If the transaction is still pending and not yet confirmed, there may be a narrow window to attempt cancellation." },
      { type: "h2", text: "Step 2 — Determine Recovery Possibility" },
      { type: "p", text: "Sent to another exchange's address: Contact that exchange's support immediately with your TxID. They may be able to identify the receiving account and initiate a return — not guaranteed." },
      { type: "p", text: "Sent to a random wallet address: There is no technical mechanism for recovery. You would need to identify the owner and request voluntary return." },
      { type: "p", text: "Clipboard hijacking: Report to cybersecurity authorities and immediately move remaining funds from your device to a clean wallet." },
      { type: "h2", text: "Step 3 — Secure Your Remaining Funds" },
      { type: "bullets", items: ["Scan your device with reputable antivirus software", "Transfer remaining funds to a new wallet on a clean device", "Revoke all token approvals from your old wallet", "Change passwords on all exchange accounts"] },
      { type: "h2", text: "Honest Assessment" },
      { type: "p", text: "Recovery of funds sent to the wrong address is extremely rare. Blockchain's immutability is a feature that protects against fraud — but it also means mistakes are permanent. This is why verification before every transaction is essential." }
    ]
  },
  {
    slug: "transaction-pending-too-long",
    title: "Transaction Pending Too Long",
    severity: "Medium",
    severityColor: "#f59e0b",
    description: "Your transaction has been stuck in a pending state on the blockchain for an unusually long time.",
    icon: "🕐",
    content: [
      { type: "h2", text: "Why Transactions Get Stuck" },
      { type: "p", text: "Blockchain validators prioritize transactions based on the fee offered. When network demand is high, transactions with lower fees sit unconfirmed in the mempool for hours or even days. Your funds are not lost — they are waiting in a queue." },
      { type: "h2", text: "Step 1 — Check the Transaction Status" },
      { type: "bullets", items: ["Ethereum: etherscan.io", "BNB Chain: bscscan.com", "TRON: tronscan.org", "Bitcoin: blockchain.info", "Solana: solscan.io"] },
      { type: "h2", text: "Step 2 — Assess the Wait" },
      { type: "p", text: "Bitcoin: Can take hours to days during congestion. Ethereum: During high congestion, transactions can wait hours. BNB Chain: Rarely congested — over 5 minutes pending is unusual. TRON: Near-instant — stuck TRC20 often means insufficient TRX bandwidth." },
      { type: "h2", text: "Step 3 — Speed Up the Transaction (ETH/MetaMask)" },
      { type: "bullets", items: ["Open MetaMask and find the pending transaction", "Click Speed Up", "MetaMask will suggest a higher gas price", "Confirm with your password"] },
      { type: "h2", text: "Step 4 — Cancel the Transaction (ETH/MetaMask)" },
      { type: "p", text: "Find the pending transaction, click Cancel. This sends a zero-value transaction with higher gas. If confirmed before the original, the original is effectively cancelled." },
      { type: "warning", text: "Important: Cancellation is not guaranteed. If the original transaction confirms first, the cancellation attempt is ignored." },
      { type: "h2", text: "Step 5 — For Exchange Withdrawals" },
      { type: "p", text: "Do not contact the exchange until at least 2 hours have passed. If 24+ hours with no confirmation, contact support with your TxID." },
      { type: "h2", text: "Step 6 — For TRC20 Stuck Transactions" },
      { type: "p", text: "Ensure you have at least 10 TRX in your wallet. Freeze TRX to gain bandwidth for free transactions." }
    ]
  },
  {
    slug: "withdrawal-rejected-by-exchange",
    title: "Withdrawal Rejected by Exchange",
    severity: "Medium",
    severityColor: "#f59e0b",
    description: "Your withdrawal request was rejected or cancelled by the exchange before being sent to the blockchain.",
    icon: "🚫",
    content: [
      { type: "h2", text: "Why Exchanges Reject Withdrawals" },
      { type: "p", text: "A rejection means the exchange did not send the transaction — your funds remain in your exchange account." },
      { type: "warning", text: "Note: A rejected withdrawal is not lost. Your funds are still in your exchange account. This is a problem to solve, not a crisis." },
      { type: "h2", text: "Security Hold After Account Changes" },
      { type: "p", text: "Any recent change — password reset, new device login, 2FA modification — triggers an automatic 24-48 hour hold on withdrawals. Resolution: Wait the required period and check your email for security notifications." },
      { type: "h2", text: "KYC Verification Required" },
      { type: "p", text: "Many exchanges restrict withdrawals above certain limits without identity verification. Navigate to Account Settings → Identity Verification and complete or update your KYC. Approval typically takes 1–3 business days." },
      { type: "h2", text: "Suspicious Activity Detection" },
      { type: "p", text: "Exchanges flag unusual withdrawal patterns. Contact exchange support directly — they will guide you through verification to confirm you are the authorized account holder." },
      { type: "h2", text: "Amount Below Minimum" },
      { type: "p", text: "Each token has a minimum withdrawal amount displayed on the withdrawal page." },
      { type: "h2", text: "Steps to Resolve" },
      { type: "bullets", items: ["Check your email for a notification explaining the rejection reason", "Review your account for any recent security changes or pending verifications", "Check the exchange's status page for maintenance announcements", "Contact exchange support with account email, token and amount, destination address, and time of rejection", "Be prepared to complete identity verification"] }
    ]
  }
]

export const faqs = [
  {
    q: "What information do I need to provide when starting a chat?",
    a: "Have your transaction hash (TxID), the sending and receiving addresses, the token and amount, and the network used ready. The more detail you provide upfront, the faster we can help."
  },
  {
    q: "Will you ever ask for my private key or seed phrase?",
    a: "Never. Under no circumstances will any member of our support team ask for your private key, seed phrase, or wallet password — not in chat, not in email, not ever. Anyone claiming to be from Cryptowalletsupport and asking for these details is attempting to scam you."
  },
  {
    q: "How long does it take to resolve a withdrawal issue?",
    a: "Most withdrawal issues are diagnosed within minutes once you provide your TxID and transaction details. Resolution time depends on the exchange or blockchain involved — some issues resolve within hours, while complex cases can take 3–14 business days."
  },
  {
    q: "Which wallets and exchanges do you support?",
    a: "We provide guidance for all major wallets including Trust Wallet, MetaMask, Bitget Wallet, and Coinbase Wallet, as well as exchanges including Binance, Bybit, OKX, Kraken, and Coinbase."
  },
  {
    q: "What should I do if my transaction has been pending for over 24 hours?",
    a: "First, check the transaction on the relevant blockchain explorer using your TxID. If it shows Pending, the fee may be too low. If it shows Success but funds haven't arrived, the issue is on the receiving end. Start our live chat and share your TxID for personalized guidance."
  },
  {
    q: "Is this service free to use?",
    a: "Yes. Cryptowalletsupport is entirely free to use. We provide guidance, articles, and live chat support at no charge. Any service claiming they can recover funds for a fee is a scam."
  },
  {
    q: "What is a network fee and why did my transaction fail because of it?",
    a: "A network fee (gas fee) is paid to blockchain validators who process your transaction. If your fee was set too low relative to current network demand, validators will deprioritize or reject your transaction. Ensure you hold sufficient native coin (ETH, BNB, TRX, SOL) to cover fees."
  },
  {
    q: "Can you recover funds sent to the wrong address?",
    a: "In most cases, blockchain transactions are irreversible. However, if the wrong address belongs to an exchange, they may be able to help. If you sent to your own wallet on the wrong network, recovery is often possible. Start a live chat immediately — time matters."
  }
]
