import axios from 'axios'
import { Toast } from 'antd-mobile'

// request
axios.interceptors.request.use(config => {
  console.log(config, 'request - config')
  Toast.loading('加载中', 2)
  return config
})

// 
axios.interceptors.response.use(config => {
  console.log(config, 'request - config')
  setTimeout(() => {
    Toast.hide()

  }, 2000) 
  return config
})

export default axios
