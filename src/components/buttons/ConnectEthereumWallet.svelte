<script lang="ts">
    import { ethereumAccount } from "../../store/account";


  import connectMetaMask from "../../utils/connectMetaMask";




</script>

<button
  id="connectMetaMaskButton"
  class="connectWalletButton btn btn-primary"
  on:click={async () => {

      await connectMetaMask().then((address) =>
    {
          // ToDo: Refactor
        alert(address)
     ethereumAccount.set(address)
        })
      ;
 

  }}>Metamask</button
>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .connectWalletButton {
    width: 200px;
    margin: 10px;
  }
</style>
