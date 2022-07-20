import { type FirebaseStorage, getStorage, ref, getDownloadURL } from 'firebase/storage'
import { getClientApp } from './client'

export const getStorageRef: () => FirebaseStorage = () => {
  return getStorage(getClientApp())
}

export const getImageURL: (imageName: string) => Promise<string> = (imageName) => {
  const storageRef = getStorageRef()
  const imageRef = ref(storageRef, imageName)
  return getDownloadURL(imageRef)
}
