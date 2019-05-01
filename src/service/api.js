import { github } from './http'

export const getJobs = (url) => {
  return github.get(url)
}
