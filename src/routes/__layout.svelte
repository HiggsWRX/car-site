<script>
  import '../app.css'
  import Navbar from '../lib/components/Navbar.svelte'
  import Sidebar from '../lib/components/Sidebar.svelte'
  import Footer from '../lib/components/Footer.svelte'

  let showSidebar = false
</script>

<Navbar bind:showSidebar />

<section class="flex flex-col relative overflow-hidden">
  <Sidebar bind:isOpen={showSidebar} />
  <main class="grow">
    <slot />
  </main>
  <Footer />
</section>

<style>
</style>
