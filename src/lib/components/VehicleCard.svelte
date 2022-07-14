<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import { formatCurrency } from '$lib/utils/formatCurrency'
  import { formatNumber } from '$lib/utils/formatNumber'

  export let vehicle: Vehicle
</script>

<div class="md:w-1/4 text-slate-600">
  <div class="h-[30vh] rounded-sm overflow-hidden">
    <img alt="car" src={vehicle.images[0]} class="w-full h-full object-cover" />
  </div>
  <h3 class="mt-4 mb-1 md:mb-2 text-2xl md:text-3xl">{vehicle.title}</h3>
  <div class="text-xl text-slate-500">
    <h4>Carrosserie: {vehicle.year}</h4>
    <h4>Bouwjaar: {vehicle.year}</h4>
    <h4>Kilometerstand: {formatNumber(vehicle.mileage)}</h4>
    <h4>Brandstof: {vehicle.fuel}</h4>
    <h4>Transmissie: {vehicle.transmission}</h4>
  </div>
  <h3 class="p-2 text-right text-2xl md:text-3xl">{formatCurrency(vehicle.price)}</h3>
</div>
