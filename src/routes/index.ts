import type { RequestHandler } from '@sveltejs/kit'
import { getVehicles } from '$lib/repositories/vehicle.repository'

export const GET: RequestHandler = async () => {
  try {
    const vehicles = await getVehicles(3)
    return {
      status: 200,
      body: { newestVehicles: vehicles }
    }
  } catch (error) {
    return { status: 500, body: 'Error fetching content' }
  }
}
