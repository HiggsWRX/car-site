<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import { getContext } from 'svelte'
  import VehicleCard from './VehicleCard.svelte'

  const { getVehicles } = getContext('vehicles')
  const vehicles: Vehicle[] = getVehicles()
</script>

<section class="flex flex-col m-4 md:mx-10 justify-center">
  <h1 class="my-4 md:my-10 text-2xl md:text-5xl text-center text-slate-700">
    ONZE NIEUWSTE OCCASIONS
  </h1>

  <div class="flex justify-center gap-4 md:gap-10 flex-wrap">
    {#each vehicles as vehicle}
      <VehicleCard {vehicle} />
      <hr class="md:hidden w-5/6 border-t border-slate-300 last:hidden" />
    {/each}
  </div>
</section>
