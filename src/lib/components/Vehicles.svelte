<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import VehicleCard from './VehicleCard.svelte'

  export let vehicles: Vehicle[]
</script>

<section class="flex flex-col m-4 md:mx-0 justify-center">
  <slot />

  <div class="flex justify-center gap-4 md:gap-10 flex-wrap">
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="md:hidden w-5/6 border-t border-slate-300 last:hidden" />
    {/each}
  </div>
</section>
