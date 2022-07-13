<script>
  import '../app.css'
  import Footer from '../lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
</script>

<div class="app-content relative">
  <Header />

  <main class="relative">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app-content {
    width: 100vw;
  }

  :root {
    overflow-x: hidden;
  }
</style>
