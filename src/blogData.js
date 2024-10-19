const blogData = [
  {
    id: 1,
    date: "09 Jul ",
    img: "./images/tonkeeper-education-hub.png",
    title: "🤓Tonkeeper Education Hub",
    dec: "We're thrilled to announce the launch of our new educational series, diving into the world of crypto, blockchain fundamentals and the TON ecosystem.",
    data: `
    We're thrilled to announce the launch of our new educational series, diving into the world of crypto, blockchain fundamentals and the TON ecosystem. We're excited to share our knowledge and provide useful tips to make your journey into the crypto world smoother and safer, helping you avoid scams along the way.

In this our first post, we'll cover the basics:

What is blockchain
What is a blockchain explorer
What is Blockchain?

Imagine using Telegram and a friend sends some cryptocurrency, such as USDT. What is this digital money? How does it operate? Let's explore the fundamentals of blockchain, the technology that powers cryptocurrencies.

Blockchain serves as a digital ledger that documents transactions. Think of it as a series of blocks. Each block contains transaction details. These blocks are connected in a sequence to create a chain - hence the word “blockchain”.

Blockchain technology is not controlled by any single entity, such as a bank. Instead, it is managed by a network of computers known as “nodes” spread across the globe. And each of these nodes possesses a copy of the blockchain. These nodes collaborate to authenticate and log transactions, replacing the need for one centralized entity like a bank.

When one friend sends cryptocurrency to another, the transaction is recorded in one of these blocks. But before it gets included in the blockchain, other nodes must verify it. This validation process in cryptocurrencies ensures transactions are genuine and safeguards against fraud. Once validated the block joins the chain, reflecting an updated balance in crypto wallets such as Tonkeeper.

An essential characteristic of blockchain is its transparency and security. Every transaction is visible to all network participants. This makes alterations or hacking attempts challenging. Blockchain stands out as cutting-edge technology supporting cryptocurrencies. It revolutionizes how transactions and trust are perceived in the digital era.

What is a Blockchain Explorer?

Many people wonder how they can keep track of and validate transactions on a blockchain. This is where a blockchain explorer becomes useful.

A blockchain explorer serves as a tool that enables anyone to observe all transactions occurring on a specific blockchain. It can be likened to a search engine tailored for the crypto realm. When a friend sends cryptocurrency this action is logged on the blockchain. Through the use of a blockchain explorer, individuals have the ability to input either a transaction ID or wallet address to access transaction details.

Upon opening an explorer like Tonviewer , users are greeted with a search bar and an overview of recent transactions. By inputting a transaction ID, users can uncover information regarding transfers, including the transferred amount, sender and recipient addresses and confirmation time. This level of transparency stands as one of the core advantages of the technology.

Apart from transaction details, blockchain explorers provide an array of information for users to view. Users can check out block height (indicating how many blocks have been appended to the blockchain), monitor recent transactions and at times even assess the TON network status.

Utilizing an explorer is straightforward and does not necessitate any special permissions. It acts as a tool for verifying successful transactions and instilling peace of mind in users.

Users have the ability to delve into blockchain operations using this tool allowing them to grasp the intricacies of cryptocurrency transactions. Give an explorer like Tonviewer a try to witness a transaction in progress. It offers a peek into the wide open realm of blockchain technology.

Stay tuned and get ready to learn!

Download Tonkeeper: tonkeeper.com

Download Tonkeeper Pro: tonkeeper.com/pro

Follow: en · ru · فارسی · twitter`,
  },
  {
    id: 2,
    date: "25 Jul",
    img: "./images/how-tonkeeper-brings-gasless.png",
    title: "How Tonkeeper Brings Gasless Transactions to TON",
    dec: "Tonkeeper Battery and Gasless are innovative features to help people use TON without having to buy Toncoin. This article explains how Battery and Gasless are implemented, the features and tradeoffs.",
  },
  {
    id: 3,
    dat: "02 Sep",
    img: "./images/tonkeeper-education-hub-2.png",
    title: "Tonkeeper Education Hub",
    dec: "We are thrilled to announce the new installment of Tonkeeper Education Hub. This time, we will cover TON fees and the Tonkeeper battery.",
    data: `
    We are thrilled to announce the new installment of Tonkeeper Education Hub. This time, we will cover TON fees and the Tonkeeper battery.

TON has garnered significant attention for its high throughput, scalability, and low transaction costs. However, like any blockchain network, it operates on a fee-based system. Understanding these fees is crucial for users to effectively manage the TON holdings and optimize their transactions.

How do TON Fees Work?

When making a crypto transaction, users are usually required to pay a gas fee. TON fees included in gas are complex and depend on several factors. Have a look at the fee formula below.

TransactionFee = StorageFees + InFwdFees + ComputationFees + ActionFees + OutFwdFees

Let’s break it down and discuss each factor that comes into play:

Storage_fee is the cost of storing the smart contract (including the TON wallet) on the blockchain. This is essentially rent paid by the second.
in_fwd_fee is a charge for importing messages from outside the TON blockchain into the TON network for validators to process.
computation_fee is the cost of running the smart contract code on the TON virtual machine, and The more complex code the higher the fee is.
action fee is the cost of processing an action triggered by the smart contract execution, like sending messages to other contracts.
out_fwd_fee is a charge for sending messages out of the TON network to interact with external services.
The average gas price when sending any amount of TON sits around 0.0055 TON. Transactions are expected to remain below $0.01, even if the price of TON increases significantly. This is a stark contrast to the often exorbitant fees seen on other popular blockchains.

🔋Tonkeeper Battery

Tonkeeper Battery offers an alternative way of paying transaction fees. Instead of paying gas in crypto, you can do so by spending battery charges you can buy hassle-free with your credit card or a stablecoin.

Battery has been created to remove an obstacle for newcomers. Users can conduct transactions without going to an exchange to buy coins to cover blockchain fees. Tonkeeper Battery pays your fees for you, automatically.

Users can charge the battery with one tap using in-app purchases, or with TON or stablecoins. One charge is enough to cover the fee of a simple TON transfer transaction, with more complex transactions requiring more charges.

When a user signs a transaction, Tonkeeper deducts the amount of charges required to pay gas fees from the Battery.

One charge: Covers a simple Ton transfer.
5–10 charges: Required for more complex transactions like token or NFT transfers.

Tonkeeper Battery has processed more than 2 million transactions by mid-June 2024. Check it out now and make crypto transactions simpler than ever.`,
  },
];
export default blogData;
