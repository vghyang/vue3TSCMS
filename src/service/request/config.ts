let BASE_URL = ''
const TIME_OUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org'
} else {
  BASE_URL = 'https://api.apiopen.top/api'
}

export { BASE_URL, TIME_OUT }
