<script lang="ts">

    import getPonziToken from "../utils/getPonziToken";

</script>

<button
  id="connectMetaMaskButton"
  class="connectWalletButton btn btn-primary"
  on:click={async () => {

    await getPonziToken()
   
  }}>Get Ponzi Token Stats</button
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
