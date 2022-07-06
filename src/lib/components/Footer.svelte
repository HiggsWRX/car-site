<script>
  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'
</script>

<footer class="flex flex-col items-center p-3 bg-slate-100">
  <ul class="flex flex-wrap w-full py-5 md:pl-40 [&>*]:w-1/3 [&>*:hover]:underline">
    <Menu />
  </ul>
  <Logo />
  <p class="text-xs pt-3 text-slate-400">
    Made with <span class="text-red-300">♥</span> by @HiggsWRX
  </p>
</footer>
