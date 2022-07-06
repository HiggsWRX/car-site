<script lang="ts">
  export let isOpen = false
</script>

<aside
  class="absolute w-full h-[90%] mt-16 bg-white bg-opacity-90 backdrop-blur-sm border-r-2 shadow-lg"
  class:isOpen
>
  <nav class="p-12 text-xl">
    <a class="block" href="#about">Stock</a>
    <a class="block" href="#about">Services</a>
    <a class="block" href="#about">About</a>
    <a class="block" href="#contact">Contact</a>
  </nav>
</aside>

<style>
  aside {
    right: -100%;
    transition: right 0.3s cubic-bezier(0.5, 1, 0.89, 1);
  }

  .isOpen {
    right: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    aside {
      transition: none;
    }
  }
</style>
