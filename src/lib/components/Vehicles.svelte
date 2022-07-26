<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import VehicleCard from './VehicleCard.svelte'

  export let vehicles: Vehicle[]
  const centerInstead: boolean = vehicles.length < 3
</script>

<section class="mx-4 my-10 md:my-20 sm:px-10 md:px-[6vw] md:mx-auto">
  <slot />

  <div
    class="flex flex-col justify-between mt-10 xl:flex-row gap-6 xl:gap-12 md:mt-20"
    class:centerInstead
  >
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="w-5/6 mx-auto mb-2 border-t xl:hidden border-slate-300 last:hidden" />
    {/each}
  </div>
</section>

<style>
  .centerInstead {
    justify-content: center;
  }
</style>
