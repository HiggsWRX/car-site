<script>
  import "../app.css"
  import Navbar from "../lib/components/Navbar.svelte"
  import Sidebar from "../lib/components/Sidebar.svelte"

  let showSidebar = false
</script>

<section class="overflow-hidden">
  <Sidebar bind:isOpen={showSidebar} />
  <Navbar bind:showSidebar={showSidebar} />
</section>

<slot />

<style>
	:global(body) {
		padding: 0;
	}
</style>