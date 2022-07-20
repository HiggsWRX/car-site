import { type Firestore, getFirestore } from 'firebase/firestore'
import { getClientApp } from './client'

export const getFirestoreRef: () => Firestore = () => {
  return getFirestore(getClientApp())
}
