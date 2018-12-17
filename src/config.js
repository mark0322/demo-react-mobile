import axios from 'axios'
import { Toast } from 'antd-mobile'

// request
axios.interceptors.request.use(config => {
  // console.log(config, 'request - config')
  Toast.loading('加载中')
  return config
})

// 
axios.interceptors.response.use(config => {
  // console.log(config, 'response - config')
  Toast.hide()
  return config
})

// export default axios
