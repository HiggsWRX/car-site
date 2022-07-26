<script lang="ts">
  import { goto } from '$app/navigation'

  import Hamburguer from './Hamburguer.svelte'
  import Logo from '../Logo.svelte'
  import Menu from '../Menu.svelte'

  export let showSidebar: boolean = false
</script>

<nav class="flex h-16 w-full items-center justify-between pl-3 md:p-8">
  <div on:click={() => goto('/')}>
    <Logo />
  </div>
  <ul class="hidden gap-4 text-lg md:flex [&>*:hover]:underline">
    <Menu />
  </ul>
  <Hamburguer bind:open={showSidebar} width="48" />
</nav>
