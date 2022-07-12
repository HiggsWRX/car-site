<script lang="ts">
  import { goto } from '$app/navigation'

  const handleClick = () => goto('/')
</script>

<div class="flex flex-col w-full py-32 justify-center items-center text-center">
  <p class="text-9xl text-slate-600">404</p>
  <p class="text-6xl text-slate-600">PAGE NOT FOUND</p>

  <button on:click={handleClick} class="w-32 mt-16 text-xl underline text-slate-600">Go back</button
  >
</div>
