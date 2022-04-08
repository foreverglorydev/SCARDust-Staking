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
  const _tokenSplitter = "0x67cE3a7cBC96EfeAf8041Cfd1F0e382722fc91e4";
  const _startBlock = "10429000"; // Testnet BlockNumer
  const _rewardsPerBlockForStaking = ["189000000000000000000","89775000000000000000","35437500000000000000","18900000000000000000"]
  const _rewardsPerBlockForOthers = ["611000000000000000000", "290225000000000000000", "114562500000000000000", "61100000000000000000"]
  const _periodLengthesInBlocks = ["195000", "585000", "1560000", "2346250"]
  const _numberPeriods = "4";

  const TokenDistributor = await ethers.getContractFactory("TokenDistributor");
  const tokenDistributor = await TokenDistributor.deploy(
    _scarDustToken,
    _tokenSplitter,
    _startBlock,
    _rewardsPerBlockForStaking,
    _rewardsPerBlockForOthers,
    _periodLengthesInBlocks,
    _numberPeriods
  );

  await tokenDistributor.deployed();

  console.log("TokenDistributor deployed to:", tokenDistributor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
