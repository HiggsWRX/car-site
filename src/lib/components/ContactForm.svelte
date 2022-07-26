<script>
  import H1Title from './H1Title.svelte'
</script>

<section class="w-full bg-red-400 py-10">
  <H1Title>Heeft u nog vragen?</H1Title>

  <form class="flex flex-col gap-6">
    <input
      type="text"
      placeholder="Naam"
      class="w-full rounded-sm border-2 border-slate-600 p-2 text-2xl"
    />
    <input
      type="email"
      placeholder="Email"
      class="w-full rounded-sm border-2 border-slate-600 p-2 text-2xl"
    />
    <input
      type="text"
      placeholder="Telefoonnummer"
      class="w-full rounded-sm border-2 border-slate-600 p-2 text-2xl"
    />
    <textarea
      placeholder="Bericht"
      class="min-h-[15vh] w-full rounded-sm border-2 border-slate-600 p-2 text-2xl"
    />

    <button class="w-full rounded-sm border bg-slate-800 p-2 text-2xl text-neutral-100">
      Verstuur
    </button>
  </form>
</section>
