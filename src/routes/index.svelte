<script lang="ts">
  import Landing from '$lib/components/Landing.svelte'
  import Vehicles from '$lib/components/Vehicles.svelte'
  import Intro from '$lib/components/Intro.svelte'
  import type { Vehicle } from '$lib/models/vehicle.model'
  import H1Title from '$lib/components/H1Title.svelte'
  import Filters from '$lib/components/Filters.svelte'
  import GoogleReviews from '$lib/components/GoogleReviews.svelte'

  export let newestVehicles: Vehicle[]
  let highlightVehicles: Vehicle[]
  highlightVehicles = newestVehicles
</script>

<Landing />

{#if newestVehicles}
  <Vehicles vehicles={newestVehicles}>
    <H1Title>ONZE NIEUWSTE OCCASIONS</H1Title>
  </Vehicles>
{/if}

<Filters />

{#if highlightVehicles}
  <Vehicles vehicles={highlightVehicles}>
    <H1Title>HIGHLIGHTS</H1Title>
  </Vehicles>
{/if}

<Intro />

<GoogleReviews />
