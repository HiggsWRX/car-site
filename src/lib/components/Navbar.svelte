<script lang="ts">
  import Hamburguer from './Hamburguer.svelte'
  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'

  export let showSidebar = false
</script>

<header class="flex items-center h-16 bg-slate-100">
  <nav class="flex items-center w-full pl-3 md:p-8 justify-between">
    <Logo />
    <ul class="hidden md:flex gap-4 text-lg [&>*:hover]:underline">
      <Menu />
    </ul>
    <Hamburguer bind:open={showSidebar} />
  </nav>
</header>
