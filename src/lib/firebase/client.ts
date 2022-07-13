import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'

export const getClientApp: () => FirebaseApp = () => {
    if (getApps().length) return getApp()

    const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    
    }

    if (!config.apiKey || !config.authDomain || !config.projectId) {
        throw new Error('Firebase envorinment variables not set')
    }

    const clientApp = initializeApp(config)
    
    return clientApp
}

