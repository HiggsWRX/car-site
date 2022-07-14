import { collection, query, limit, getDocs } from 'firebase/firestore'
import { getDatabase } from '$lib/firebase/database'
import type { Vehicle } from '$lib/models/vehicle.model'

export async function getVehicles(lim = 100): Promise<Vehicle[] | null> {
  const databaseRef = getDatabase()
  const collectionRef = collection(databaseRef, 'articles')
  const q = query(collectionRef, limit(lim))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const { title, year, price, images, mileage, body, fuel, transmission } = doc.data()

    return {
      title,
      year,
      price,
      images,
      mileage,
      body,
      fuel,
      transmission
    }
  })
}
