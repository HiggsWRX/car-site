<script lang="ts">
  import Menu from './Menu.svelte'

  export let isOpen: boolean = false
</script>

<aside
  class="top-16 w-full bg-white bg-opacity-90 backdrop-blur-sm border-r-2 shadow-sm shadow-slate-400"
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
    transition: all 0.2s ease-in-out;
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
