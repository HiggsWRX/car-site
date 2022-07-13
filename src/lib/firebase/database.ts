import { type Firestore, getFirestore } from 'firebase/firestore'
import { getClientApp } from './client'

export const getDatabase: () => Firestore = () => {
  return getFirestore(getClientApp())
}
