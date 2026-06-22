import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: projectId || 'dummy-project-id',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})
