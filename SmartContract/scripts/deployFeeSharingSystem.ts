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
  const _scarDustToken = "0x131107D25b125eAB1A8685113Cb32fBddb2B5042";
  const _rewardToken = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // WETH Testnet Address
  const _tokenDistributor = "0x799175C454413283ed09e875118b062b4D0ec489";

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
