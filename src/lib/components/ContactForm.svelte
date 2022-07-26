<script>
  import H1Title from './H1Title.svelte'
</script>

<section class="w-full py-10 bg-red-400">
  <H1Title>Heeft u nog vragen?</H1Title>

  <form class="flex flex-col gap-6">
    <input
      type="text"
      placeholder="Naam"
      class="w-full p-2 text-2xl border-2 rounded-sm border-slate-600"
    />
    <input
      type="email"
      placeholder="Email"
      class="w-full p-2 text-2xl border-2 rounded-sm border-slate-600"
    />
    <input
      type="text"
      placeholder="Telefoonnummer"
      class="w-full p-2 text-2xl border-2 rounded-sm border-slate-600"
    />
    <textarea
      placeholder="Bericht"
      class="w-full min-h-[15vh] text-2xl border-2 border-slate-600 rounded-sm p-2"
    />

    <button class="w-full p-2 text-2xl border rounded-sm bg-slate-800 text-neutral-100">
      Verstuur
    </button>
  </form>
</section>
