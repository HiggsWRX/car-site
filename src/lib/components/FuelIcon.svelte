<script lang="ts">
  import GasIcon from '$lib/assets/icons/gas.svelte'
  import ElectricIcon from '$lib/assets/icons/electric.svelte'
  import HybridIcon from '$lib/assets/icons/hybrid.svelte'

  export let fuel = ''
</script>

{#if fuel === 'Benzine' || fuel === 'Diesel'}
  <GasIcon />
{:else if fuel === 'Elektrisch'}
  <ElectricIcon />
{:else}
  <HybridIcon />
{/if}
