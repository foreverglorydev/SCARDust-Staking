// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // When running the script with `npx hardhat run <script>` you'll find the Hardhat
// // Runtime Environment's members available in the global scope.
// import { ethers } from "hardhat";

// async function main() {
//   // Hardhat always runs the compile task when running scripts with its command
//   // line interface.
//   //
//   // If this script is run directly using `node` you may want to call compile
//   // manually to make sure everything is compiled
//   // await hre.run('compile');

//   // We get the contract to deploy
//   const _premintReceiver = "0x36285fDa2bE8a96fEb1d763CA77531D696Ae3B0b";
//   const _premintAmount = "200000000000000000000000000";
//   const _cap = "1000000000000000000000000000";

//   const LooksRareToken = await ethers.getContractFactory("LooksRareToken");
//   const looksRareToken = await LooksRareToken.deploy(_premintReceiver, _premintAmount, _cap);

//   await looksRareToken.deployed();

//   console.log("LooksRareToken deployed to:", looksRareToken.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

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
  const LooksRareToken = await ethers.getContractFactory("LooksRareToken");
  const looksRareToken = await LooksRareToken.deploy(200000);

  await looksRareToken.deployed();

  console.log("SCARDust deployed to:", looksRareToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


