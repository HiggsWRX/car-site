import { browser } from '$app/env'

export const getServerOnlyEnvVar = (key: string) => {
  if (browser) {
    throw new Error('Attempting to access server-only environment variable on the browser')
  }

  return process.env[key]
}
