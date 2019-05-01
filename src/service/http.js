import axios from 'axios'

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000
})

export { github }
