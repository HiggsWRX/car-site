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

<div class="flex w-full flex-col text-slate-600 xl:w-1/3">
  <div class="h-[35vh] overflow-hidden rounded-sm">
    <img alt="car" src={vehicle.images[0]} class="h-full w-full object-cover" />
  </div>

  <h3 class="mt-4 mb-1 text-2xl text-sky-800 md:mb-6 md:text-[1.6rem] md:leading-7">
    {vehicle.title}
  </h3>

  <div class="mt-auto mb-0 flex flex-wrap gap-2 text-xl text-slate-500">
    <div class="flex w-full justify-between fill-slate-600">
      <div class="flex flex-col gap-4">
        <h4 class="flex items-center gap-2">
          <div class="w-8"><BodyIcon body={vehicle.body} /></div>
          <span class="font-light text-slate-600">{vehicle.body}</span>
        </h4>
        <h4 class="flex items-center gap-2">
          <div class="w-8"><FuelIcon fuel={vehicle.fuel} /></div>
          <span class="font-light text-slate-600">{vehicle.fuel}</span>
        </h4>
        <h4 class="flex items-center gap-2">
          <div class="w-8"><GearIcon transmission={vehicle.transmission} /></div>
          <span class="font-light text-slate-600">{vehicle.transmission}</span>
        </h4>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="flex items-center gap-2">
          <div class="w-8"><Speedometer /></div>
          <span class="font-light text-slate-600">{formatNumber(vehicle.mileage)} KM</span>
        </h4>
        <h4 class="flex items-center gap-2">
          <div class="w-8"><Calendar /></div>
          <span class="font-light text-slate-600">{vehicle.year}</span>
        </h4>
      </div>
    </div>
  </div>
  <h3 class="text-right text-2xl text-sky-800 md:text-2xl">
    {formatCurrency(vehicle.price)}
  </h3>
</div>
