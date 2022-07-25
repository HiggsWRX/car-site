<script lang="ts">
  import CabrioletBody from '$lib/assets/icons/cabriolet-body.svelte'
  import HatchBody from '$lib/assets/icons/hatch-body.svelte'
  import MicroBody from '$lib/assets/icons/micro-body.svelte'
  import PickupBody from '$lib/assets/icons/pickup-body.svelte'
  import SedanBody from '$lib/assets/icons/sedan-body.svelte'
  import SuvBody from '$lib/assets/icons/suv-body.svelte'
  import VanBody from '$lib/assets/icons/van-body.svelte'

  export let body = 'Sedan'
</script>

{#if body === 'Hatchback'}
  <HatchBody />
{:else if body === 'SUV/Off-road'}
  <SuvBody />
{:else if body === 'Cabriolet'}
  <CabrioletBody />
{:else if body === 'Micro'}
  <MicroBody />
{:else if body === 'Pickup'}
  <PickupBody />
{:else if body === 'Van'}
  <VanBody />
{:else}
  <SedanBody />
{/if}
