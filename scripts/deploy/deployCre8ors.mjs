import { retryDeploy } from "../contract.mjs";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.CHAIN}`,
});

export async function deployCre8ors(root) {
  console.log("deploying Cre8ors");
  const contractName = "cre8ors";
  const contractSymbol = "CRE8";
  const _initialOwner = "0x4D977d9aEceC3776DD73F2f9080C9AF3BC31f505"; // cre8ors.eth
  const _fundsRecipient = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"; // sweetman.eth
  const _editionSize = "8888";
  const _royaltyBPS = "888";
  const publicSalePrice = "150000000000000000";
  const erc20PaymentToken = "0x0000000000000000000000000000000000000000";
  const maxSalePurchasePerAddress = 18;
  const publicSaleStart = "1691167800"; // Friday, August 4, 2023 12:50:00 PM  ET
  const publicSaleEnd = "18446744073709551615"; // forever
  const presaleStart = "1691167200"; // Friday, August 4, 2023 12:40:00 PM ET
  const presaleEnd = "18446744073709551615"; // forever
  const presaleMerkleRoot = root;

  const _salesConfig = `"(${publicSalePrice},${erc20PaymentToken},${maxSalePurchasePerAddress},${publicSaleStart},${publicSaleEnd},${presaleStart},${presaleEnd},${presaleMerkleRoot})"`;
  const _metadataRenderer = "0x209511E9fe3c526C61B7691B9308830C1d1612bE"; // from Zora
  const contractLocation = "src/Cre8ors.sol:Cre8ors";
  const args = [
    contractName,
    contractSymbol,
    _initialOwner,
    _fundsRecipient,
    _editionSize,
    _royaltyBPS,
    _salesConfig,
    _metadataRenderer,
  ];
  const dropContract = await retryDeploy(2, contractLocation, args);
  console.log(`[deployed] ${contractLocation}`);
  const dropContractAddress = dropContract.deploy.deployedTo;
  console.log("deployed cre8ors to ", dropContractAddress);

  return dropContract;
}
