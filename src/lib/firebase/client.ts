import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getPerformance } from 'firebase/performance'
import { getAnalytics } from 'firebase/analytics'

export const getClientApp: () => FirebaseApp = () => {
  if (getApps().length) return getApp()

  const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_BUCKET_ID
  }

  if (!config.apiKey || !config.authDomain || !config.projectId || !config.storageBucket) {
    throw new Error('Firebase envorinment variables not set')
  }

  const clientApp = initializeApp(config)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const performance = getPerformance(clientApp)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(clientApp)

  return clientApp
}
