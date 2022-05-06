module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Crypt0Donuts", {
    from: deployer,
    args: [
      "Crypt0Donuts",
      "CD",
      "https://ipfs.io/ipfs/Qme5LkL37X9BdQAGQp9UwgP3uBmYPWseELHVUVtjimUopA/",
    ],
    log: true,
  });
};
module.exports.tags = ["Crypt0Donuts"];
