<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import VehicleCard from './VehicleCard.svelte'

  export let vehicles: Vehicle[]
</script>

<section class="flex flex-col mx-4 md:mx-0 my-10 md:my-20 justify-center">
  <slot />

  <div class="flex justify-center mt-10 md:mt-20  gap-4 md:gap-10 flex-wrap">
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="md:hidden w-5/6 border-t mb-4 md:mb-0 border-slate-300 last:hidden" />
    {/each}
  </div>
</section>
