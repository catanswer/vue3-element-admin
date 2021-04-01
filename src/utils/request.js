import axios from 'axios'

const service = axios.create({
  timeout: 10000
})

service.interceptors.response.use(
  res => {
    const { data: { code }, status } = res

    return data
  },
  err => {
    return Promise.reject(err)
  }
)

export default service