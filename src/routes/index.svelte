<script lang="ts">
  import Landing from '$lib/components/Landing.svelte'
  import Vehicles from '$lib/components/Vehicles.svelte'
  import Intro from '$lib/components/Intro.svelte'
  import type { Vehicle } from '$lib/models/vehicle.model'
  import H1Title from '$lib/components/H1Title.svelte'
  import Filters from '$lib/components/Filters.svelte'
  import GoogleReviews from '$lib/components/GoogleReviews.svelte'
  import ContactForm from '$lib/components/ContactForm.svelte'

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

<!-- <div class="flex flex-wrap xl:flex-nowrap md:w-4/5 p-4 py-10 md:py-20 mx-auto bg-yellow-400">
  <GoogleReviews />
  <ContactForm />
</div> -->
