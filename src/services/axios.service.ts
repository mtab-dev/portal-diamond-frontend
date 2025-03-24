'use client'

import { ENVIRONMENT } from '@/constants/enviroment'
import AxiosPrimitive from 'axios'

const axios = AxiosPrimitive.create({
  baseURL: ENVIRONMENT.BASE_API,
  withCredentials: false
})


export default axios
