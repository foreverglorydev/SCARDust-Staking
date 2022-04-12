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
  const team = "";
  const treasury = "";
  const trading = "";
  const _accounts = [team, treasury, trading]
  const _shares = [4410, 800, 900];
  const _scarDustToken = "0x131107D25b125eAB1A8685113Cb32fBddb2B5042";


  const TokenSplitter = await ethers.getContractFactory("TokenSplitter");
  const tokenSplitter = await TokenSplitter.deploy(_accounts, _shares, _scarDustToken);

  await tokenSplitter.deployed();

  console.log("TokenSplitter deployed to:", tokenSplitter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
