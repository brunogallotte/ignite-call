import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ignite-call-five-gamma.vercel.app/api',
})
