<script lang="ts">
  import Navbar from './Navbar.svelte'
  import Sidebar from '$lib/components/Header/Sidebar.svelte'

  let showSidebar: boolean = false
</script>

<header
  class="contain-layout sticky top-0 z-50 flex flex-col items-center bg-slate-100 shadow-sm shadow-slate-400"
>
  <Navbar bind:showSidebar />
  <Sidebar isOpen={showSidebar} />
</header>

<style>
  .contain-layout {
    contain: layout;
  }
</style>
