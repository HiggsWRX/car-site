<script lang="ts">
  import { goto } from '$app/navigation'

  import Hamburguer from './Hamburguer.svelte'
  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'

  export let showSidebar: boolean = false
</script>

<nav class="flex items-center h-16 w-full pl-3 md:p-8 justify-between">
  <div on:click={() => goto('/')}>
    <Logo />
  </div>
  <ul class="hidden md:flex gap-4 text-lg [&>*:hover]:underline">
    <Menu />
  </ul>
  <Hamburguer bind:open={showSidebar} />
</nav>
