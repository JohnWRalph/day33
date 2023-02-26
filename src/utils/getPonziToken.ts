import {ethers} from "ethers"
import tokenABI from "../../tokenABI.json"
import { tokenName, tokenSymbol, tokenTotalSupply } from "../store/token";

let provider;

async function getPonziToken() {
    const provider = new ethers.providers.Web3Provider(
        (window as any as EthereumWindow).ethereum
      );
const tokenAddress = "0x5D3cfaFc1155f61758485FC4dc90aB5f95A0fBE8"
const contract = new ethers.Contract(tokenAddress, tokenABI, provider)
const symbol = await contract.symbol();
const name = await contract.name();
var totalSupply = await contract.totalSupply();
totalSupply = ethers.utils.formatEther(totalSupply);
tokenName.set(name)
tokenSymbol.set(symbol)
tokenTotalSupply.set(totalSupply)

}






export default getPonziToken