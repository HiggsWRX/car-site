<script lang="ts">
  import Menu from '../Menu.svelte'

  export let isOpen: boolean = false
</script>

<aside
  class="top-16 w-full border-r-2 bg-slate-100 bg-opacity-90 shadow-sm shadow-slate-400 backdrop-blur-sm md:hidden"
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
    position: absolute;
    transition: all 0.2s ease-out;
    transform: translateX(100%);
  }

  .isOpen {
    transform: translateX(0);
  }

  @media (prefers-reduced-motion: reduce) {
    aside {
      transition: none;
    }
  }
</style>
