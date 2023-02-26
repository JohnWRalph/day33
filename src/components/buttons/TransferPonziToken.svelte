<script lang="ts">
    import { ethers } from "ethers";


    import getPonziToken from "../../utils/getPonziToken";
    import transferPonziToken from "../../utils/transferPonziToken";
let transferAmount;
</script>

<div id="transferInput">
<input bind:value={transferAmount} type="number" placeholder="Enter Amount" class="input input-bordered input-primary w-full max-w-xs" />
<button
  id="connectMetaMaskButton"
  class="connectWalletButton btn btn-primary"
  on:click={async () => {
    const weiAmount = ethers.utils.parseEther(transferAmount.toString());
console.log(weiAmount)
    await transferPonziToken(weiAmount)
   
  }}
  >Transfer Ponzi Tokens</button
>

</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
#transferInput {
  display:flex;
  flex-direction: row;
  margin:30px;


}

</style>
