import { getDatabase } from '$lib/firebase/database'
import type { Article } from '$lib/models/article.model'
import { collection, query, limit, getDocs } from 'firebase/firestore'

export async function getArticles(lim: number): Promise<Article[] | null> {
  const collectionRef = collection(getDatabase(), 'articles')
  const q = query(collectionRef, limit(lim))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const data = doc.data()

    return {
      title: data.title,
      year: data.year,
      price: data.price
    }
  })
}
