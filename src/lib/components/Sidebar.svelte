<script lang="ts">
  import Menu from './Menu.svelte'

  export let isOpen = false
</script>

<aside
  class="absolute z-50 w-full h-[90%] mt-16 bg-white bg-opacity-90 backdrop-blur-sm border-r-2 shadow-lg"
  class:isOpen
>
  <nav class="p-12 text-xl text-slate-700">
    <ul>
      <Menu />
    </ul>
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
