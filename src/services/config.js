const devBaseURL = 'http://123.207.32.32:9001'
const proBaseURL = 'http://123.207.32.32:9001'

const BASE_URL = process.env.NODE_ENV === 'development'
    ? devBaseURL
    : proBaseURL

const TIMEOUT = 5000

export {
    BASE_URL,
    TIMEOUT
}