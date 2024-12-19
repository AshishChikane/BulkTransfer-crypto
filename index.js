require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const bulkTransferContractABI = [
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const bulkTransferContract = new ethers.Contract(contractAddress, bulkTransferContractABI, wallet);

async function sendFunds() {
  const addresses = [
    "0x8FaC...........8A8f93C42",
    "0x8FaC...........8A8wqwdC42",
    "0x8FaC...........8A8asddw2a",
  ];

  const amount = ethers.parseEther("0.01");

  try {
    // Calculate the total value (number of recipients * amount per recipient)
    const totalValue = amount * BigInt(addresses.length);

    const tx = await bulkTransferContract.sendFunds(addresses, amount, {
      value: totalValue,
    });

    console.log(`Transaction hash: ${tx.hash}`);
    await tx.wait();
    console.log("Funds sent successfully!");
  } catch (error) {
    console.error("Error sending funds:", error);
  }
}

sendFunds();
