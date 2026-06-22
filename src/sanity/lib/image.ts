import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

// Initialize the builder
const builder = createImageUrlBuilder({
  projectId: projectId || 'dummy',
  dataset: dataset || 'production',
})

export const urlFor = (source: any) => {
  return builder.image(source)
}
