const { ethers } = require("hardhat");

async function main() {

  const waitlistContract = await ethers.getContractFactory("Waitlist");

  // here we deploy the contract
  const deployedWaitlistContract = await waitlistContract.deploy(10);

  // Wait for it to finish deploying
  await deployedWaitlistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Waitlist Contract Address:",
    deployedWaitlistContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });