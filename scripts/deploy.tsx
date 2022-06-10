const { ethers } = require("hardhat");

async function main() {

  const waitlistContract = await ethers.getContractFactory("Waitlist");

  const deployedWaitlistContract = await waitlistContract.deploy(10);

  await deployedWaitlistContract.deployed();

  console.log(
    "Waitlist Contract Address:",
    deployedWaitlistContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });