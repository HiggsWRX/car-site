<script>
  import Logo from '$lib/components/Logo.svelte'
  import Menu from '$lib/components/Menu.svelte'
  import Instagram from '$lib/assets/icons/instagram.svelte'
  import Location from './Location.svelte'
  import Contact from './Contact.svelte'
  import BusinessHours from './BusinessHours.svelte'
  import Whatsapp from '$lib/assets/icons/whatsapp.svelte'
</script>

<footer class="flex flex-col items-center bg-red-400 text-xl md:px-[6vw]">
  <ul
    class="flex w-full flex-wrap bg-green-400 py-5 text-slate-600 underline md:pl-0 md:no-underline [&>*]:w-1/2 [&>*]:py-1 md:[&>*]:w-1/3"
  >
    <Menu />
  </ul>

  <div
    class="flex w-full flex-col bg-yellow-300 pb-4 text-center text-slate-600 md:flex-row md:self-center md:text-left"
  >
    <div class="relative py-2 md:w-1/3">
      <Location />
    </div>
    <div class="py-2 md:w-1/3">
      <Contact />
    </div>
    <div class="py-2 md:w-1/3">
      <BusinessHours />
    </div>
  </div>

  <div class="flex gap-4 pb-4 md:pt-4">
    <Whatsapp classes="w-6 fill-slate-700" />
    <Instagram classes="w-6 fill-slate-700" />
  </div>

  <Logo classes="my-2" />

  <p class="pt-6 text-xs text-slate-400 opacity-70">
    Made with <span class="text-red-300">♥</span> by @HiggsWRX
  </p>
</footer>
