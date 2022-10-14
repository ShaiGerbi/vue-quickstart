import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60 * 1000
}

export default axios.create(config)
