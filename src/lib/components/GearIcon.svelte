<script lang="ts">
  import AutoGear from '$lib/assets/icons/auto-gear.svelte'
  import ManualGear from '$lib/assets/icons/manual-gear.svelte'

  export let transmission = 'Handmatig'
</script>

{#if transmission === 'Automatisch'}
  <AutoGear />
{:else}
  <ManualGear />
{/if}
