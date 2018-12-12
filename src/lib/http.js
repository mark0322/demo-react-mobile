/**
 * HTTP Agent
 */

import instance from './axios'

// Add request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  config => {
    return config
  },
  // Do something with request error
  error => {
    return Promise.reject(error)
  },
)

// Add response interceptor
instance.interceptors.response.use(
  // Do something with response data
  response => {
    return response.data
  },
  // Do something with response error
  error => {
    return Promise.reject(error)
  },
)

export default instance
