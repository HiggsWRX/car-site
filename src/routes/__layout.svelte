<script lang="ts">
  import '../app.css'
  import Footer from '$lib/components/Footer/Footer.svelte'
  import Header from '$lib/components/Header/Header.svelte'
</script>

<div class="relative app-content">
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
