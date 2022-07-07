<script lang="ts">
  import Menu from './Menu.svelte'

  export let isOpen: boolean = false
  let scrollY: number
  let menuElement: HTMLElement | null = null

  $: if (isOpen && menuElement) menuElement.style.transform = `translateY(${scrollY}px)`
</script>

<svelte:window bind:scrollY />

<aside
  class="absolute z-20 w-full h-full bg-white bg-opacity-90 backdrop-blur-sm border-r-2 shadow-lg"
  class:isOpen
>
  <nav class="p-12 text-xl text-slate-700">
    <ul bind:this={menuElement}>
      <Menu />
    </ul>
  </nav>
</aside>

<style>
  aside {
    right: -100%;
    transition: right 0.2s ease-in-out;
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
