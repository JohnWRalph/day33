import { writable } from "svelte/store";

const tokenName = writable<string>("-")
const tokenSymbol = writable<string>("-")
const tokenTotalSupply = writable<number>("-")

export {tokenName,tokenSymbol, tokenTotalSupply};