import axios from 'axios'

const service = axios.create({
  baseURL: "http://192.168.199.228:8082", // url = base url + request url
  // baseURL: origin + pathname,
  timeout: 50000 // request timeout
});

service.interceptors.request.use(
  config => {
    // config.headers["Authorization"] = "1111";
    // config.headers["currentRole"] = "2222";
    // config.headers["sign"] = "3333";
    // config.headers.aaa = "444"
    return config
  },
  error => {
    console.log(1111)
    Promise.reject("111111111111")
  }
)


export default service;