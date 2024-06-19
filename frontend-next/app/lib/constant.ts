import { ethers } from "ethers";
import Account from "@/artifacts/contracts/account.sol/Account.json";

export const sepoliaUrl = String(process.env.SEPOLIA_RPC_URL);
export const address = String(process.env.CONTRACT_ADDRESS);
export const provider = new ethers.JsonRpcProvider(sepoliaUrl);
export const privateKey = String(process.env.PRIVATE_KEY);
export const wallet = new ethers.Wallet(privateKey);
export const walletConnected = wallet.connect(provider);

export const contract = new ethers.Contract(
  address,
  Account.abi,
  walletConnected,
);
