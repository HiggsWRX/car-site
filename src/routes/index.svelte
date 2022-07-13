<script context="module">
  import { getArticles } from '$lib/repositories/article.repository'

  export async function load() {
    try {
      const articles = await getArticles()

      return {
        props: {
          articles
        }
      }
    } catch (error) {
      return {
        status: 500,
        error: 'Error'
      }
    }
  }
</script>

<script lang="ts">
  import HomeContent from '$lib/components/HomeContent.svelte'
  import Landing from '$lib/components/Landing.svelte'
  import type { Article } from '$lib/models/article.model'

  export let articles: Article[] = []
</script>

<Landing />
<HomeContent {articles} />
