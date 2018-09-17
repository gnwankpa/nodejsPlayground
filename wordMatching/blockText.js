const blockText = 'LAUNCHED\r\n\r\nDownload the binaries from: http:\/\/litecoin.org\r\nCheck out the source: https:\/\/github.com\/litecoin-project\/litecoin\r\nWiki: http:\/\/litecoin.info\r\nForum: http:\/\/forum.litecoin.net\/\r\n\r\n\r\nLitecoin is the result of some of us who joined together on IRC in an effort to create a real alternative currency similar to Bitcoin.  We wanted to make a coin that is silver to Bitcoin\'s gold.  Various alternative currencies have come and gone.  Some brought innovation, but they all had problems.\r\n\r\nixcoin - Nasakioto premined 580k coins. Seemed like a pump and dump. Competed with Bitcoin for GPU resources - Dead (~2 gh\/s)\r\ni0coin - Basically ixcoin without the premine. Not much support was given to this coin after it was released. - Dead (~5 gh\/s)\r\nSolidCoin - Innovative quick transaction times. Appears to have been run aground by CoinHunter, its creator, due to insecure changes and immature forum presence. - Dead, shutdown by CoinHunter\r\nGeistGeld - Lolcust premined 7.7 million coins.  15 second block time is probably a bit extreme. - Alive, but limping (~15 gh\/s)\r\nTenebrix - Lolcust premined 7.7 million coins.  CPU proof of work using scrypt is very innovative.  Price doing fairly well on btc-e.com. - Alive (~0.003 gh\/s)\r\nFairbrix - Basically Tenebrix without the premine.  First launch was crippled due to bad config.  Relaunch attacked initially - Doing OK now, but no exchange so far. - Alive, but limping (~0.0001 gh\/s)\r\n\r\nWe wanted the best innovations of Bitcoin and these other currencies to create a coin with all of their benefits, but nearly none of their problems.\r\n\r\nProof of Work\r\n\r\nWe really liked Tenebrix\'s Scrypt proof of work.  Using Scrypt allows one to mine Litecoin while also mining Bitcoin.  We humbly offer a big thanks to ArtForz for the implementation.\r\n\r\nPremines\r\n\r\nLitecoin will come with 150 premined coins: just the genesis block and the first 2 blocks to confirm the genesis is valid.  We believe a coin needs to be released in a fair manner.  Having one person (or a group) control a large amount of coins that can be used as they see fit is against the decentralized vision of Bitcoin.  Yes, it is true that without a stash of premined coins, we will not be able to afford to pay for bounties, but we believe people will see the virtue of this coin, invest in it as early adopters, and will be willing to spend time creating services to make this coin better.\r\n\r\nFast transactions\r\n\r\nWe were impressed by the convenience of SolidCoin\'s fast transactions.  Although we know that fast confirmations are not necessarily as secure as Bitcoin\'s slower confirmations, they are very convenient for small merchants who don\'t need transactions to be super secure. The average Litecoin block takes 2.5 minutes, one quarter of Bitcoin\'s 10 minutes.  So if merchants wanted to be as safe as Bitcoin, they can wait for 4 times the number of Litecoin confirmations as compared to Bitcoin. But most merchants can readily accept 1-confirmed transactions for small amounts of litecoins.\r\n\r\nDifficulty retarget\r\n\r\nWe will keep the retarget block the same as Bitcoin\'s 2016, but because blocks are found 4 times faster, difficulty will retarget about every 3.5 days.  The combination of fast retarget times and Scrypt proof of work (Litecoin will not compete with Bitcoin for miners) means we expect to not see the sort of problem Namecoin encountered; hashing power that leaves more suddenly than it came, causing a high difficulty slog for everyone who stayed.\r\n\r\nCoin generation\r\n\r\nMiners will generate 50 coins per block.  In light of our faster blocks, to properly mimic Bitcoin\'s generation trajectory, we needed to change the blocks at which coin generation is halved.  Bitcoin generation is halved every 210,000 blocks.  Litecoin generation will be halved every 840,000 blocks.  For those of you doing the math, Litecoin is scheduled to produce roughly 4 times as many coins as Bitcoin, about 84 million litecoins.\r\n\r\nFairness\r\n\r\nWe have come up with a plan that we believe is most fair.  Some previous coins were released without Windows binaries or without source code; we consider this as unfair as it is unsafe.\r\n\r\nWe released the source code and binaries ahead of time... 3 days before launch.  People had time to compile the source and run the client on their machines against the Litecoin testnet.  So people were able to make sure everything was working well before the launch.  We also had a poll so that people can vote for a launch time that best suits them.  At the time of the launch (Oct 12 03:00 GMT), we released the genesis hash and everyone started mining at the same time.  All it took was a simple change in the config file in order to mine the real coin instead of the testnet coin.\r\n\r\n51% attack\r\n\r\nThe problem with alternative currencies is that the network hashrate is likely low when the coin starts up, making an easy target for any potential 51% attacker. With a little hope, a little prayer, a lot of hype, and due to our innovative release, there was a large hashrate from minute one.  We believe this deterred any attackers from targeting this chain.  As expected, there was a lot of natural orphaning of blocks, due to having so many people mining on the chain at once.  With block locking at every difficulty change, we were able to avoid any attacks from succeeding. (if there were any)\r\n\r\nSource code\r\n\r\nThe source code is here:\r\n   https:\/\/github.com\/litecoin-project\/litecoin\r\n\r\nThis is based on the latest Bitcoin code. You can either build the daemon version (litecoind) or you can build the gui version (Litecoin QT). See the build docs.\r\n\r\nSimilar to Bitcoin, you may want to create a litecoin.conf file here:\r\n    Windows: C:\\Documents and Settings\\<username>\\Application Data\\Litecoin\r\n    Win7: C:\\Users\\<username>\\AppData\\Roaming\\Litecoin\r\n    Mac: ~\/Library\/Application Support\/Litecoin\r\n    Unix: ~\/.litecoin\r\n\r\nPort is 9333. Open if on your router if you know how. This will allow you to have more than 8 connections.\r\nAnd default RPC port is 9332. This is the port miners will use to communicate with your client\/daemon.\r\n\r\nSample litecoin.conf file:\r\nCode:\r\nserver=1\r\nrpcuser=user\r\nrpcpassword=password\r\n\r\n#Change this if you want to use a different rpc port for mining\r\n#rpcport=9332\r\n\r\n#Only uncomment this if you are running litecoind and want to run Litecoin in the background (not Litecoin QT)\r\n#daemon=1\r\n\r\n\r\nSo tell us what you think. Come to the Litecoin forums (http:\/\/forum.litecoin.net) or drop by #litecoin or #litecoin-dev on freenode IRC to chat.\r\n\r\n\r\n\r\n===================\r\n\r\n\r\n\t\r\n[XMR] Monero - A secure, private, untraceable cryptocurrency\r\nApril 25, 2014, 12:38:50 AM\r\nMerited by NeuroticFish (10), rifiuti (6), OgNasty (1), hybridsole (1), Financisto (1)\r\n #1\r\n\u203A\u203A\u203A Windows 64-bit \u2022 OS X \u2022 Linux \u2022 FreeBSD \u2022  Source code \u2039\u2039\u2039\r\n\r\nWe are moving away from Bitcointalk. For latest information, check out News, announcements and editorials on the official forum\r\n\r\n\r\nWebsite: getmonero.org\r\nOfficial Forum: forum.getmonero.org\r\n\r\nMonero Economy  \u2022  Monero Support* \u2022  Monero Mining  \u2022  Monero Speculation*  \u2022  Monero Dev*  \u2022  Monero large OTC\r\n* self-moderated\r\n\r\n#monero  \u2022  #monero-dev  \u2022  #monero-otc  \u2022  #monero-markets  \u2022  #monero-pools  \u2022  QQ Group: 272729907\r\n(Freenode)\r\n\r\n   \r\n\r\nMonero (XMR) is a privacy-focused cryptocurrency that is not based on Bitcoin\'s code.\r\n\r\nMonero aims to be a fungible and untraceable digital medium of exchange. It intrinsically has a higher degree of privacy than Bitcoin or any of its various forks. It was launched on April 18, 2014 (preannounced and no premine\/ICO\/etc.).\r\n\r\nThe official core team members are (in no particular order) - Riccardo \"fluffypony\" Spagni, luigi1111, NoodleDoodle, smooth, tacotime, Franciso \"ArticMine\" Caba\u00F1as, othe\r\n\r\nAnnouncements\r\nPlease visit News, announcements and editorials on the Monero Forum for the latest news.\r\nVisit our StackExchange site, where you can ask, answer, and view technical questions!\r\n\r\nFeatures\r\n\r\nUntraceable payments\r\nUnlinkable transactions\r\nBlockchain analysis resistance\r\nAdaptive parameters\r\n\r\nAcademic and Theory\r\n\r\nMonero\'s functionality is backed up by academic research and cryptographically proven schemes. Much of this research is done by the Monero Research Lab. Since Monero was initially based on the CryptoNote protocol, the CryptoNote whitepaper is also an invaluable reference for validating Monero\'s unlinkability and untraceability claims.\r\n\r\nThe CryptoNote Whitepaper\r\nInitial Review of the CryptoNote Whitepaper\r\nMRL-0001: A Note on Chain Reactions in Traceability in CryptoNote 2.0\r\nMRL-0002: Counterfeiting via Merkle Tree Exploits within Virtual Currencies Employing the CryptoNote Protocol\r\nMRL-0003: Monero is Not That Mysterious\r\nMRL-0004: Improving Obfuscation in the CryptoNote Protocol\r\nMRL-0005: Ring Signature Confidential Transactions\r\n\r\nSpecifications\r\n\r\nPoW algorithm: CryptoNight [1]\r\nMax supply: Infinite (see note below) [2]\r\nBlock reward: Smoothly varying [3]\r\nBlock time: 120 seconds\r\nDifficulty: Retargets at every block\r\n\r\n[1] CPU + GPU mining (about 1:1 performance for now). Memory-bound by design using AES encryption and several SHA-3 candidates.\r\n[2] Initial number of atomic units is M = 264 - 1. However, once the block reward reaches 0.3 XMR per minute (sometime in 2022) that is treated as the minimum subsidy, which means that Monero\'s total emission will forever increase by ~157680 XMR annually.\r\n[3] Uses a recurrence relation. Block reward = (M - A) * 2-20 * 10-12, where A = current circulation. Roughly 86% mined in 4 years (see graph).\r\n\r\n\r\nOfficial downloads and links\r\n\r\nGetting Started - Follow the guide to set up the software and start mining.\r\n\r\nOfficial forum\r\n\r\nSource and binaries\r\nAlso see below for optional GUI.\r\n\r\nLatest release: 0.10.1.0 Wolfram Warptangent\r\n\r\nSource code\r\nWindows, 64-bit (downloads.getmonero.org\/win64) - SHA256: 727a53dd154b61fd653f81da27788077fdf519301c81d3c1eb033c1ff2bf97c6\r\nWindows, 32-bit (downloads.getmonero.org\/win32) - SHA256: ce77137b33bcaeb59273cb73b86e426e35e6209fb52a7e74fd9432a5a3018041\r\nOS X, 64-bit (downloads.getmonero.org\/mac64) - SHA256: 447cebae257864b3706a8622f495bfd9fae780a6b277e1e31ac83bef7bc855c6\r\nLinux, 64-bit (downloads.getmonero.org\/linux64) - SHA256: bf09eea27c957e7e2bdd62dac250888b301d4d25abe18d4a5b930fa7477708c7\r\nLinux, 32-bit (downloads.getmonero.org\/linux32) - SHA256: 9a18d274970df85d6bc926dc99407959c680c36f19017996be9c758f6c02cf06\r\nARMv7 (downloads.getmonero.org\/arm) - SHA256: 57221605997a3cd815f2a9689486abbdb124263fff047ca61068900eb7cb1839\r\nFreeBSD 64-bit (downloads.getmonero.org\/freebsd64) - SHA256: 3858d4786b65a37e981b142e9c0f256ac66662314794d05f595c4c30cb5b6ddb\r\n\r\nDonations for general development\r\n\r\nXMR:\r\nCode:\r\naddress (OpenAlias) donate.getmonero.org\r\naddress (full) 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A\r\nviewkey: f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501\r\n\r\nBTC:\r\nCode:\r\n1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H\r\n\r\nMonero Community Hall of Fame\r\n\r\nAlternative Clients\r\n\r\nPlease visit: How to choose a Monero client\r\n\r\nMiners\r\nCPU, open source - Wolf`\'s CPU miner.\r\nCPU, closed source - yvg1900 - Yam M8a Miner New version - use at your own risk.\r\nGPU, open source - Tsiv Nvidia GPU Miner (based on ccminer) Early in development - Thanks Tsiv!\r\nGPU, closed source - Claymore AMD GPU miner - Early in development - use at your own risk.\r\n\r\nBlockchain explorer\r\n\r\nmoneroblocks.info\r\nchainradar\r\n\r\nExchanges, Services, and Related Projects\r\n\r\nPlease visit Merchants and services directory\r\n\r\nPools\r\n\r\nFor an up-to-date list of pools, go to http:\/\/moneropools.com\r\n\r\nFAQ\r\nFor a longer FAQ, check Community FAQ\r\n\r\nWhat is CryptoNote?\r\nCryptoNote is the technology that allows creation of privacy-centric cryptocurrencies. You can visit their website here. The level of anonymity provided by CryptoNote isn\'t possible with Bitcoin code base by design. Bytecoin (BCN) was the CryptoNote reference implementation, and XMR is based on BCN\'s code.\r\n\r\nTwo of the main features of CryptoNote are ring signatures that mask sender identities by mixing and one-time keys that make transactions unlinkable. Their combined effect gives a high degree of anonymity without any extra effort on the part of the user.\r\n\r\nUnlike Bitcoin, your funds are not held in the address you give out to others. Instead, every time you receive a payment it goes to an unlinkable address generated with random numbers. When you decide to spend the funds in that one-time address, the amount will be broken down and the components will be indistinguishable from identical outputs in the blockchain.\r\n\r\nFor example if 556.44 XMR are sent, the protocol will break it down into 500 + 50 + 6 + 0.4 + 0.04 and a ring signature will be performed with other 500\'s, 50\'s, 6\'s, 0.4\'s, and 0.04\'s in the blockchain. Unlike the \"CoinJoin\" mixing method, CryptoNote mixes outputs not transactions. This means no other senders need to be participating with you at the same time or with the same amounts. Any arbitrary amount sent at any time can always be rendered fundamentally indistinguishable (a mathematical proof is given in the white paper).\r\n\r\nThe degree of anonymity is also a choice rather than decided by the protocol: do you want to be hidden as one among five or one among fifty? The size of the signature grows linearly as O(n+1) with the ambiguity so greater anonymity is paid for with higher fees to miners.\r\n\r\nRing signatures are explained below. Reproduced from CryptoNote:\r\n\r\nA normal signature looks like this. There\'s only one participant, which allows one-to-one mapping.\r\n\r\n\r\n\r\nA ring signature obscures identities because it only proves that a signer belongs to a group.\r\n\r\n\r\n\r\nThis allows a high level of anonymity in cryptocurrency transactions. You can think of it as decentralized and trustless mixing.\r\n\r\n\r\n\r\nHow does this compare to other anonymous solutions?\r\nRing signatures originate from the work of Rivest et al. in 2001 and the implementation in CryptoNote relies in particular on Fujisaki and Suzuki\'s work on traceable ring signatures. There are two other anonymity implementations currently available or in development. One is ZeroCoin\/ZeroCash\'s use of zero-knowledge proofs. The others are based on gmaxwell\'s CoinJoin idea (such as mixing services for Bitcoin or the altcoin Darkcoin).\r\n\r\n1. Comparison with ZeroCoin and ZKP-based approaches:\r\nYou can read about ZeroCoin and zero-knowledge proofs (ZKP) here. The ZK environment allows an anonymity set that includes everyone in the network because the validity of an output can be proven without knowing the corresponding public key until it is spent. The largest risk is that this is recent research-level cryptography that hasn\'t been subjected to years of cryptanalysis, so exploits may emerge down the road. Ring signatures are much simpler and more mature, with many peer-reviewed papers published over more than a decade.\r\n\r\nOther issues with ZKP include the RSA private key used to initiate the accumulator, which must be trusted to be destroyed by the generating party. It also obscures the entire economy, not just sender\/receiver identities. If the ZK system is compromised, then an attacker can continuously spend coins that don\'t exist using false proofs. This damage is hidden from everybody due to total blinding and consequently at any given time it\'s not possible to know if the network has already been compromised. There is a tradeoff between these inherent risks and the maximal anonymity set provided by ZKP. CryptoNote aims for a different balance through the dual layers of privacy provided by one-time keys and ring signatures.\r\n\r\n2. Comparison with CoinJoin-based approaches:\r\nXMR is more qualitatively similar to mixing implementations like CoinJoin. The differences arise in the departure from the Bitcoin protocol, which allows XMR to use new cryptography to provide decentralized and trustless mixing of superior quality. The critical problem with mixing services is the need to trust the operators. As an example, blockchain.info\'s mixer gives the following disclaimer: \"However if the server was compromised or under subpoena it could be force to keep logs. If this were to happen although you haven\'t gained any privacy you haven\'t lost any either.\"\r\n\r\nThe CoinJoin-inspired Darkcoin performs mixing with selected \"masternodes\" since it still uses ordinary signatures that can be mapped one-to-one. The motivation is that a randomly selected node is less likely than a single service to exhibit bad faith (such as keeping logs) . In practice, a few VPS companies host the vast majority of nodes and this approach relies on the integrity and good behavior of these nodes. XMR\'s more fundamental cryptographic approach doesn\'t have these vulnerabilities and the quality of anonymity is much higher.\r\n\r\nXMR\'s ring signatures are also far more secure and convenient than CoinJoin because they mix outputs not transactions. This means a transaction doesn\'t involve waiting around for other senders to mix with. Nor is a user restricted to mixing only if others are sending the same amount. Arbitrary amounts can be sent at any time without anyone else\'s participation. This feature makes a timing analysis of the blockchain useless.\r\n\r\nOverview of a transaction\r\nBob decides to spend an output, which was sent to the one-time public key. He needs Extra (1), TxOutNumber (2), and his Account private key (3) to recover his one-time private key (4).\r\n\r\nWhen sending a transaction to Carol, Bob generates its Extra value by random (5). He uses Extra (6), TxOutNumber (7) and Carol\'s Account public key (8) to get her Output public key (9).\r\n\r\nIn the input Bob hides the link to his output among the foreign keys (10). To prevent double-spending he also packs the Key image, derived from his One-time private key (11).\r\n\r\nFinally, Bob signs the transaction, using his One-time private key (12), all the public keys (13) and Key Image (14). He appends the resulting Ring Signature to the end of the transaction (15).\r\n\r\n\r\n\r\nTranslations\r\n\r\n   \u4E2D\u6587  (QQ Group: 272729907)\r\n\r\n   \u0420\u0443\u0441\u0441\u043A\u0438\u0439\r\n\r\n   Portugu\u00EAs\r\n\r\n   Fran\u00E7ais\r\n\r\n   Espa\u00F1ol\r\n\r\n\r\n   ============================================\r\n\r\n\t\r\n[ANN][DASH] Dash (dash.org) | First Self-Funding Self-Governing Crypto Currency\r\nJanuary 18, 2014, 05:50:23 PM\r\nMerited by aleix (10), OgNasty (1), afbitcoins (1), Financisto (1), so142001 (1)\r\n #1\r\nAnnouncements | Twitter | Facebook | GitHub | Reddit | YouTube | Discord | Freenode IRC: #dashpay\r\n\r\n\r\nOfficial Website\r\nOfficial Forums\r\nDash Wiki\r\n\r\n\r\n\r\nLatest Client: Dash v12.2.3 Release - Download here.\r\n\r\nDash is an open source peer-to-peer cryptocurrency with a strong focus on the payments industry. Dash offers a form of money that is anonymous, portable, inexpensive and fast. It can be spent securely both online and in person with only minimal transaction fees. Based on the Bitcoin project, Dash aims to be the most user-friendly and scalable payments system in the world. In addition to Bitcoin\'s feature set, Dash currently also includes a second-layer network of masternodes to facilitate instant transactions (InstantSend), private transactions (PrivateSend) and governance functions to create a self-governing and self-funding network capable of paying individuals and businesses for work that adds value to Dash. This decentralized governance and budgeting system makes it one of the first ever successful decentralized autonomous organizations (DAO).\r\n\r\nHow to update to 12.2.3: https:\/\/dashpay.atlassian.net\/wiki\/x\/ZIBlBw\r\nDownloads: https:\/\/www.dash.org\/wallets\/\r\n\r\nQuick Dash Facts:\r\n\r\n- Dash is a next generation cryptographic currency\r\n- Dash supports instant transactions and privacy using decentralized technology\r\n- 2 MB blocks + very low fees\r\n- Dash has no premine and was launched fairly and transparently\r\n- Total coins will most likely be near 18.9 million (https:\/\/dashpay.atlassian.net\/wiki\/x\/HgADC)\r\n- Coins will cease to be generated near the year 2300\r\n- Dash uses the X11 algorithm for mining\r\n \r\nDash Introduction Videos:\r\n\r\nWhat Is Dash?\r\n\r\n\r\n\r\n\r\nDash School\r\n\r\n\r\n\r\n\r\nDash 101\r\n\r\n\r\n\r\n\r\nDash Features\r\n\r\nMasternode Network\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/P4AR\r\n\r\n\r\nPrivateSend\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/LIAR\r\n\r\n\r\nInstandSend\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/MIAR\r\n\r\n\r\nMulti-Phased Spork\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/EoAkAQ\r\n\r\n\r\nBudget System (Funding\/ Voting \/DGBB)\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/HgCD\r\n\r\n\r\nEvolution\r\nhttps:\/\/www.dash.org\/evolution\/\r\n\r\nLearn More About Dash\r\n\r\n\r\nMiscellaneous:\r\n\r\nWhitepaper\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/BYBT\r\n\r\nDownloads: Stable release binaries, previous releases and source code: \r\nhttps:\/\/www.dash.org\/wallets\/\r\n\r\nASIC Miners:\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/CQD7Ag\r\n\r\nExchanges:\r\nhttps:\/\/www.dash.org\/exchanges\/\r\nMining Pools:\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/BgDyAQ\r\n\r\nDash Merchant Directory:\r\nhttps:\/\/www.dash.org\/merchants\/\r\n\r\nOther tools\r\nPaper Wallet: https:\/\/paper.dash.org\r\nBlockchain Explorer1: https:\/\/chainz.cryptoid.info\/dash\r\nBlockchain Explorer 2: https:\/\/insight.dash.org\r\nMasternode Status: https:\/\/dashninja.pl\/masternodes.html\r\nDifficulty Chart: https:\/\/chainz.cryptoid.info\/dash\/#@diff\r\n\r\nList of Known Scams:\r\nhttps:\/\/dashpay.atlassian.net\/wiki\/x\/JwDeAQ\r\n\r\n\r\n======================\r\n\r\n\r\nNN] (QTUM) - A Scalable PoS Smart Contract Platform - MainNet Complete!\r\nDecember 19, 2016, 05:08:51 AM\r\n #1\r\n\r\n\r\nQtum Discord Server is Online! Come Speak With the Team Directly:\r\n\r\nhttps:\/\/discord.gg\/zyVMQSv\r\n\r\nThe Blockchain Made Ready for Business\r\n\r\n\r\nBuild Decentralized Applications that Simply Work\r\nExecutable on mobile devices, compatible with major existing blockchain ecosystems\r\n\r\nMAINNET NOW LIVE!\r\n\r\n\r\nABOUT\r\n\r\nThe Qtum Foundation is a Singapore based entity that promotes adoption of the Qtum Blockchain. Project inception began in March 2016, leading up to a successful crowdsale a year later. Over 10,000 BTC and 72,000 ETH were raised in less than 5 days, making Qtum one of the largest crowdfunded projects in history, at $15.6 million dollars.\r\n\r\nQtum is an open source Proof of Stake (PoS) blockchain application platform. Qtum\u2019s core technology combines a fork of Bitcoin Core, an Account Abstraction Layer allowing for multiple Virtual Machines including the Ethereum Virtual Machine (EVM) and Proof-of-Stake consensus aimed at tackling industry use cases. \r\n\r\nWe believe this will allow Smart Contracts and Decentralized Applications (DApps) to run on a familiar foundation, while offering a robust environment for developers. The underlying technology uses an \u201CAccount Abstraction Layer\u201D, which acts as a bridge between the EVM and the Unspent Transaction Output model of Bitcoin Core. Building on Bitcoin\u2019s reliable and proven-to-deliver blockchain, Qtum stacks its Account Abstraction Layer, allowing the Bitcoin Core 0.13 blockchain to seamlessly interact with the Ethereum Virtual Machine (EVM). With this innovation it is now possible to execute smart contracts and run DApps, simply and securely, in environments that were previously out of reach for Ethereum, combining the endless possibilities provided by smart contracts with the stability and maturity of the bitcoin ecosystem. There will also be Oracles and Datafeed functionality, allowing developers to create Smart Contracts built around trusted sources of information.\r\n\r\nThe Qtum Foundation plans to be the public blockchain for business. Development efforts will allow us to market this platform to various industries, such as: Mobile Telecommunications, Counterfeit Protection, Finance, Industrial Logistics (shipping, warranty, etc), and Manufacturing.\r\n\r\n\r\n\r\n\r\n\r\nBuild decentralized applications you can trust\r\n\r\nCombining a modified Bitcoin Core infrastructure with an intercompatible version of the Ethereum Virtual Machine (EVM), Qtum merges the reliability of Bitcoin\u2019s unfailing blockchain with the endless possibilities provided by smart contracts. \r\n\r\nDesigned with stability, modularity and interoperability in mind, Qtum is the foremost toolkit for building trusted decentralized applications, suited for real-world, business oriented use cases. Its hybrid nature, in combination with a first-of-its-kind PoS consensus protocol, allow Qtum applications to be compatible with major blockchain ecosystems, while providing native support for mobile devices and IoT appliances.\r\n\r\n\r\n\r\n\r\n\r\nSmart Contracts that Mean Business\r\n\r\nQtum makes it easier than ever for established sectors and legacy institutions to interface with blockchain technology. Create your own tokens, automate supply chain management and engage in self-executing agreements in a standardized environment, verified and tested for stability.\r\n\r\nSmart Contract Lifecycle Managment\r\n\r\nQtum, in cooperation with its academic partners, develops tools and methods to standardize the workflow for business smart contract development. This includes the formally verifiable translation of human-readable agreements to machine smart contracts, and the error-resilient specification of their elements, terms and conditions.\r\n\r\nSetting Industry Standards\r\n\r\nCooperating with a series of partners and third parties, Qtum aims to establish a smart contract hub, offering secure and thoroughly tested contract templates, tailor fitted for a multitude of industries and use cases, such as supply chain management, telecommunications, IoT, social networking, and many more.\r\n\r\n\r\n\r\n\r\nGo Mobile\r\n\r\nBuilding on Bitcoin\u2019s UTXO model, the simple payment verification (SPV) protocol is supported by the Qtum codebase by default. As a result, it is now possible to execute smart contracts from lite wallets, which can be easily installed on any given mobile device, heralding an age of mobile decentralized applications. \r\n\r\nWith this, the blockchain is finally ready to take up disruption in a world in which half of all internet traffic is being generated by smartphones and tablets.\r\n\r\n\r\n\r\n\r\nAccount Abstraction Layer\r\n\r\nQtum extends Bitcoins \'Script\' language so that it functions as a vehicle to transport code to Qtum\u2019s version of the EVM. With this, it is now possible to execute smart contracts and run decentralized applications, simply and securely, in environments that were previously out of reach for turing-complete blockchains, combining the endless possibilities provided by smart contracts with the stability and maturity of the bitcoin ecosystem. Learn more.\r\n\r\n\r\n\r\n\r\nCross Platform and Backward Compatibility\r\n\r\nQtum is compatible with existing Ethereum contracts as well as Bitcoin gateways, and will maintain backward-compatibility even if the system is updated.\r\n\r\n\r\n\r\nSpecification\r\n\r\nTotal QTUM Supply: 100,000,000\r\nBlock Target: 128 seconds\r\nStake Return: ~4 QTUM\r\nAlgorithm: SHA256\r\n\r\n\r\nAdditional Features\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nWhitepapers\r\n\r\n\t\t\r\n(Click pics to Download)\r\n\r\n\r\n\r\n\r\n\r\nCROWDSALE\r\n\r\nThe Token\r\n\r\nQTUMs are cryptographic software tokens used to engage with distributed applications (DApps) and smart contracts on the Qtum platform. QTUMs will serve as the staking currency of the Qtum blockchain and fuel computational operations performed by the Qtum network.\r\n\r\nQTUM supply and Initial Distribution\r\n\r\nWith the setting of Qtum\u2019s Genesis Block, one hundred million (100,000,000) QTUMs will be created as Qtum\u2019s total token supply, on top of which ~1% annual Proof of Stake (PoS) inflation will be added.\r\n\r\nThe QTUM token supply will be allocated as follows:\r\n\r\n51% of Qtum tokens (51,000,000) will be distributed through the crowdsale\r\n20% of Qtum tokens (20,000,000 QTUM) will be distributed among founders, early backers and the development team\r\n29% of Qtum tokens (29,000,000 QTUM) will be allocated to community initiatives concerning business development, as well as academic research, education, and market expansion\r\n\r\nFor a more detailed overview of QTUM token allocation visit our website: https:\/\/qtum.org\/en\/crowdsale#question-2 \r\n\r\n\r\nExchanges\r\nBittrex: https:\/\/bittrex.com\/Market\/Index?MarketName=BTC-qtum\r\nYunbi: https:\/\/yunbi.com\/markets\/qtumcny\r\nYuanBao: https:\/\/www.yuanbao.com\/trade\/qtum2cny\r\nBTER: https:\/\/bter.com\/trade\/qtum_cny \r\n          https:\/\/bter.com\/trade\/qtum_btc\r\nAllcoin: https:\/\/allcoin.com\/markets\/QTUM-BTC\/0\/\r\n[\/size=12pt]https:\/\/coinone.co.kr\/exchange\/trade\/qtum\/[\/size]\r\nBTC9: https:\/\/btc9.com\/trade\/22\r\n\r\n\r\n\r\n\r\nThe Qtum Foundation: Governance Structure\r\n\r\nThe development and maintenance of the Qtum Blockchain, as well as all services provided by Qtum, are directed and supervised by the Qtum Foundation - a non-profit organization, representing Qtum\u2019s stake and token holders as elaborated below.\r\n\r\nIn order to avoid the inefficient conduct, open source and blockchain projects often suffer from, and to ensure a coherent and standardized implementation of the Qtum blockchain, the Qtum Foundation was established under the guidance and support of PwC. The Foundation will oversee the development of the Qtum Blockchain, advocate governance transparency, and promote the safety and harmony of the open source ecosystem.    \r\n\r\nThe design of the Foundation\u2019s governance structure mainly considers sustainability, management effectiveness, and fund-raising security in the open source community. The Foundation consists of various committees, such as Executive Judgment, Code Review, Finance & HR, as well as Marketing & PR. The different committees work in cooperation to manage Qtum\u2019s daily operations and special occasions with detailed operational procedures and rules.\r\n\r\nLearn more here: https:\/\/qtum.org\/en\/\/the-qtum-foundation-governance-structure\r\n\r\n\r\n\r\n\r\nDecentralized Governance Protocol\r\n\r\nThe Decentralized Governance Protocol (DGP) is designed so that individual blockchain parameters can be modified through a specially designed smart contract on the blockchain. Most importantly, this technology allows these blockchain parameters to be changed without any disruption to the ecosystem. After a setting change, no new software must be downloaded by users, and no intervention is needed from stakers and node operators.\r\n\r\nThe way the DGP works is relatively straightforward. First, a governing party for the DGP makes a proposal to change a parameter. Afterward, all the governing parties for the DGP can vote on the proposal, and if it receives enough approval votes, then the parameter change proposal becomes active. The proposal data is then placed in a standardized format and a particular storage space so that the blockchain software can easily access it without needing to execute the DGP contract directly.\r\n\r\nLearn more here: https:\/\/qtum.org\/en\/blog\/qtum-s-decentralized-governance-protocol\r\n\r\n\r\n\r\n\r\n\r\n\r\nThe Qtum Foundation will list the total assets that it holds including Bitcoin, Ethereum, Legal Tender, and QTUM Tokens.\r\n\r\nThe Foundation will also seek complementary services to aid our efforts in transparency and professionalism with a professional auditing firm, legal team and a professional digital asset management solution. We hope this will help promote the healthy development of the Qtum Project and serve as a model for other projects.\r\n\r\nThe content that will be made public to the community on the Qtum website:\r\n\r\nThe Qtum Foundation obtained digital and traditional assets, which include: bitcoin, ether, and other digital assets such as Qtum tokens, as well as, legal tender in the form of USD and RMB\r\nQtum will release monthly spending reports, including employee compensation, operating costs, marketing costs and other expenses\r\n\r\nLearn more here: https:\/\/qtum.org\/en\/blog\/qtum-foundation-financial-reports-governance-plan \r\n\r\n\r\nTEAM\r\n\r\nQtum is a global project that aims to be the bridge between the Bitcoin and Ethereum communities, the real world and blockchain world. Therefore it only makes sense that the Qtum team comes from both the Bitcoin and Ethereum communities as well traditional companies like Baidu, Alibaba, Tencent, NASDAQ and more.\r\n\r\nThe Qtum Project is proud to be backed by some of the most notable blockchain players, traditional Venture Capitalists, and executives from some of China\u2019s largest technology companies.\r\n\r\nSee the full team at: https:\/\/qtum.org\/en\/team \r\n\r\nWe are looking for developers to build the next generation DApps on top of Qtum and invite you all to give our testnet a try. We are always on the lookout to enrich our very talented team, the next team member can be you!\r\n\r\n\r\n======================'

module.exports.blockText = blockText;