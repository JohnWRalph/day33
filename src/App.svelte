<script lang="ts">
    import { ethers } from 'ethers';


    import ConnectEthereumWallet from './components/buttons/ConnectEthereumWallet.svelte';
    import TransferPonziToken from './components/buttons/TransferPonziToken.svelte';
    import GetPonziToken from './components/GetPonziToken.svelte';
    import { ethereumAccount } from './store/account';
    import { tokenName, tokenSymbol, tokenTotalSupply } from './store/token';

</script>

<main>
  <!-- <ConnectEthereumWallet/><br> -->
  <!-- {$ethereumAccount}<br> -->
  <GetPonziToken/><br>
  
<div id="table" class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <!-- head -->
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Symbol</th>
        <th>TotalSupply in Eth</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        
        <td>{$tokenName}</td>
        <td>{$tokenSymbol}</td>
        <td>{$tokenTotalSupply}</td>
      </tr>
    
    </tbody>
  </table>
</div>
<TransferPonziToken/>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  #table {
    border: 1px solid white;

  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>