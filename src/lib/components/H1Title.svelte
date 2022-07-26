<script lang="ts">
  export let align = 'center'
</script>

<h1 class={`text-3xl md:text-5xl text-${align} text-slate-700`}>
  <slot />
</h1>
