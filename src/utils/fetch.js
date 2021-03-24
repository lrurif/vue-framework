import axios from 'axios'
let baseUrl = "http://192.168.102.207:8021"
axios.defaults.withCredentials = true;
const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000
})

// 请求拦截
service.interceptors.request.use(config => {
  
  // if(config.url == "http://192.168.100.246:11324/app/token?appId=813d82d4-ef5a-4d9b-8d01-054ae97fe2b4") {
  //   return config;
  // }
  // console.log(token)
  // if(!token) {
  //   window.location.href="http://192.168.100.246:13800/support/#/"
  // }else {
  //   config.headers.token = token;
  // }
    return config;
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// 请求返回拦截器
service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // vue.$Message.error({
      //   message: '1212',
      //   duration: 5 * 1000,
      //   closable: true
      // })
      return Promise.reject(error)
    }
  )

  export default service;