<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        message: error?.message,
        status
      }
    }
  }
</script>

<script>
  import NotFound from '$lib/components/NotFound.svelte'
</script>

<NotFound />
