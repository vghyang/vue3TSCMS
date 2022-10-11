import axios from 'axios'

// axios.get('https://api.apiopen.top/api/sentences').then((res) => {
//   console.log(res.data)
// })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       account: 'sss',
//       password: 1818
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

axios.defaults.baseURL = 'https://api.apiopen.top/api'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => {
    //1.给请求添加token
    //2.isloading动画
    console.log(config)
    return config
  },
  (err) => {
    console.log('请求失败')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('拦截成功')

    return res.data
  },
  (err) => {
    console.log('响应失败')
    return err
  }
)

axios.get('/sentences').then((res) => {
  console.log(res)
})

axios.all([axios.get('/getImages'), axios.get('/getTime')]).then((res) => {
  console.log(res[0].data)
})
