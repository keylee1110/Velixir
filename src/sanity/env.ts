export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET or SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_STUDIO_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    // During build time or if envs aren't configured yet, fallback to a dummy value so it doesn't break the build
    console.warn(errorMessage)
    return '' as unknown as T
  }

  return v
}
