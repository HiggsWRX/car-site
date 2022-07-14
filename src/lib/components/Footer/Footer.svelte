<script>
  import Logo from '$lib/components/Logo.svelte'
  import Menu from '$lib/components/Menu.svelte'
  import Instagram from '$lib/assets/icons/instagram.svelte'
  import Location from '$lib/components/Location.svelte'
  import Contact from '$lib/components/Contact.svelte'
  import BusinessHours from '$lib/components/BusinessHours.svelte'
  import Whatsapp from '$lib/assets/icons/whatsapp.svelte'
</script>

<footer class="flex flex-col text-xl items-center p-3 md:p-10 bg-slate-100">
  <ul
    class="flex flex-wrap w-full md:w-4/5 py-5 text-slate-600 underline md:no-underline [&>*]:w-1/2 md:[&>*]:w-1/3 [&>*]:pl-8 [&>*]:py-1 md:pl-0 md:[&>*]:pl-6"
  >
    <Menu />
  </ul>

  <div
    class="flex flex-col md:flex-row md:w-4/5 pb-4 text-slate-600 text-center md:text-left md:self-center"
  >
    <div class="py-2 md:w-1/3">
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

  <p class="text-xs opacity-70 pt-6 text-slate-400">
    Made with <span class="text-red-300">♥</span> by @HiggsWRX
  </p>
</footer>
