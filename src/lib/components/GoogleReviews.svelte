<script lang="ts">
  import google from '$lib/assets/images/google.png'
  import H1Title from './H1Title.svelte'
</script>

<section class="flex flex-col w-full my-auto bg-green-400 text-slate-80">
  <H1Title align="left">Wat vinden klanten van ons?</H1Title>
  <a
    href="https://www.google.com/search?q=car+center+s+duman&oq=car+center+s+duman#lrd=0x47c5b7aace43e271:0xe54b05e37a61bbac,1,,,"
    class="w-[50%] md:w-[20%] mt-10 md:mt-20 mx-auto md:ml-[20%]"
  >
    <img
      src={google}
      alt="Google Reviews"
      class="hover:scale-110 transition-transform ease-in-out"
    />
  </a>
</section>
