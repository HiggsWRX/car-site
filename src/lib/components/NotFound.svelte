<script lang="ts">
  import { goto } from '$app/navigation'

  const handleClick = () => goto('/')
</script>

<div class="flex w-full flex-col items-center justify-center py-32 text-center">
  <p class="text-9xl text-slate-600">404</p>
  <p class="text-6xl text-slate-600">PAGE NOT FOUND</p>

  <button on:click={handleClick} class="mt-16 w-32 text-xl text-slate-600 underline">Go back</button
  >
</div>
