<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import VehicleCard from './VehicleCard.svelte'

  export let vehicles: Vehicle[]
  const centerInstead: boolean = vehicles.length < 3
</script>

<section class="mx-4 my-10 md:my-20 sm:px-10 md:px-20 md:mx-auto">
  <slot />

  <div
    class="flex flex-col xl:flex-row gap-6 xl:gap-20 justify-between mt-10 md:mt-20"
    class:centerInstead
  >
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="xl:hidden w-5/6 mx-auto border-t mb-2 border-slate-300 last:hidden" />
    {/each}
  </div>
</section>

<style>
  .centerInstead {
    justify-content: center;
  }
</style>
