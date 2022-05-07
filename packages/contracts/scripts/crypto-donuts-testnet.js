const hre = require("hardhat");

async function main() {
  const CryptoDonuts = await hre.ethers.getContractFactory("Crypt0Donuts");
  const cryptoDonuts = await CryptoDonuts.deploy(
    "Crypt0Donuts",
    "CD",
    "https://gateway.pinata.cloud/ipfs/Qme5LkL37X9BdQAGQp9UwgP3uBmYPWseELHVUVtjimUopA"
  );

  await cryptoDonuts.deployed();

  console.log("CryptoDonuts address:", cryptoDonuts.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
