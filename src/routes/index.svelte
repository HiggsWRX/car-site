<script lang="ts">
  import HomeContent from '$lib/components/HomeContent.svelte'
  import type { Vehicle } from '$lib/models/vehicle.model'
  import { setContext } from 'svelte'

  export let vehicles: Vehicle[] = []

  setContext('vehicles', {
    getVehicles: () => vehicles
  })
</script>

<HomeContent />
