<script lang="ts">
  import type { Article } from '$lib/models/article.model'

  import Newest from './Newest.svelte'

  export let articles: Article[] = []
</script>

<Newest {articles} />
