<script lang="ts">
  import google from '$lib/assets/images/google.png'
  import H1Title from './H1Title.svelte'
</script>

<section class="text-slate-80 my-auto flex w-full flex-col bg-green-400">
  <H1Title align="left">Wat vinden klanten van ons?</H1Title>
  <a
    href="https://www.google.com/search?q=car+center+s+duman&oq=car+center+s+duman#lrd=0x47c5b7aace43e271:0xe54b05e37a61bbac,1,,,"
    class="mx-auto mt-10 w-[50%] md:mt-20 md:ml-[20%] md:w-[20%]"
  >
    <img
      src={google}
      alt="Google Reviews"
      class="transition-transform ease-in-out hover:scale-110"
    />
  </a>
</section>
