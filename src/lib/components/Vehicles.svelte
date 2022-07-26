<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import VehicleCard from './VehicleCard.svelte'

  export let vehicles: Vehicle[]
  const centerInstead: boolean = vehicles.length < 3
</script>

<section class="mx-4 my-10 sm:px-10 md:my-20 md:mx-auto md:px-[6vw]">
  <slot />

  <div
    class="mt-10 flex flex-col justify-between gap-6 md:mt-20 xl:flex-row xl:gap-12"
    class:centerInstead
  >
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="mx-auto mb-2 w-5/6 border-t border-slate-300 last:hidden xl:hidden" />
    {/each}
  </div>
</section>

<style>
  .centerInstead {
    justify-content: center;
  }
</style>
