<script lang="ts">
  import Menu from '../Menu.svelte'

  export let isOpen: boolean = false
</script>

<aside
  class="w-full border-r-2 top-16 md:hidden bg-slate-100 bg-opacity-90 backdrop-blur-sm shadow-sm shadow-slate-400"
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
