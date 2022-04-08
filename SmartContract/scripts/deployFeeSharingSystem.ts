// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const _scarDustToken = "0xff29117e680d6977f487d647356d376654B0F0CE";
  const _rewardToken = "0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5"; // Ropsten WETH Testnet Address
  const _tokenDistributor = "0xdc187779eB7dA87423f4586156162Aa87B6b5762";

  const FeeSharingSystem = await ethers.getContractFactory("FeeSharingSystem");
  const feeSharingSystem = await FeeSharingSystem.deploy(
    _scarDustToken,
    _rewardToken,
    _tokenDistributor
  );

  await feeSharingSystem.deployed();

  console.log("FeeSharingSystem deployed to:", feeSharingSystem.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
