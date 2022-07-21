<script lang="ts">
  import Landing from '$lib/components/Landing.svelte'
  import Newest from '$lib/components/Newest.svelte'
  import Intro from '$lib/components/Intro.svelte'
  import GoogleReviews from '$lib/components/GoogleReviews.svelte'
  import type { Vehicle } from '$lib/models/vehicle.model'
  import { setContext } from 'svelte'

  export let vehicles: Vehicle[] = []

  setContext('vehicles', {
    getVehicles: () => vehicles
  })
</script>

<Landing />
<Newest />
<Intro />
