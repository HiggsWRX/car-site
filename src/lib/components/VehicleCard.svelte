<script lang="ts">
  import type { Vehicle } from '$lib/models/vehicle.model'
  import { formatCurrency } from '$lib/utils/formatCurrency'
  import { formatNumber } from '$lib/utils/formatNumber'
  import Calendar from '$lib/assets/icons/calendar.svelte'
  import Speedometer from '$lib/assets/icons/speedometer.svelte'
  import FuelIcon from './FuelIcon.svelte'
  import GearIcon from './GearIcon.svelte'
  import BodyIcon from './BodyIcon.svelte'

  export let vehicle: Vehicle
</script>

<div class="flex flex-col w-full xl:w-1/3 text-slate-600">
  <div class="h-[30vh] rounded-sm overflow-hidden">
    <img alt="car" src={vehicle.images[0]} class="w-full h-full object-cover" />
  </div>

  <h3 class="mt-4 mb-1 md:mb-6 text-2xl md:text-[1.6rem] md:leading-7 text-sky-800">
    {vehicle.title}
  </h3>

  <div class="flex flex-wrap gap-2 text-xl text-slate-500 mt-auto mb-0">
    <div class="flex w-full justify-between fill-slate-600">
      <div class="flex flex-col gap-4">
        <h4 class="flex gap-2 items-center">
          <div class="w-8"><BodyIcon body={vehicle.body} /></div>
          <span class="text-slate-600 font-light">{vehicle.body}</span>
        </h4>
        <h4 class="flex gap-2 items-center">
          <div class="w-8"><FuelIcon fuel={vehicle.fuel} /></div>
          <span class="text-slate-600 font-light">{vehicle.fuel}</span>
        </h4>
        <h4 class="flex gap-2 items-center">
          <div class="w-8"><GearIcon transmission={vehicle.transmission} /></div>
          <span class="text-slate-600 font-light">{vehicle.transmission}</span>
        </h4>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="flex gap-2 items-center">
          <div class="w-8"><Speedometer /></div>
          <span class="text-slate-600 font-light">{formatNumber(vehicle.mileage)} KM</span>
        </h4>
        <h4 class="flex gap-2 items-center">
          <div class="w-8"><Calendar /></div>
          <span class="text-slate-600 font-light">{vehicle.year}</span>
        </h4>
      </div>
    </div>
  </div>
  <h3 class="text-right text-2xl md:text-2xl text-sky-800">
    {formatCurrency(vehicle.price)}
  </h3>
</div>
