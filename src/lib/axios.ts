/**
 * axios
 * memo: 
 */

 import axios from "axios";
 import { AxiosInstance, AxiosResponse } from 'axios'

 const instance: AxiosInstance = axios.create({
   baseURL: '',
   headers: {

   },
   responseType: 'json'
 })

 instance.interceptors.response.use(
   async (response: AxiosResponse): Promise<any> => {
     console.log('response', response)

     const { data } = response
   }
 )

 instance.interceptors.request.use(
   async config => {
    return Promise.resolve(config)
   },
   err => {
    return Promise.reject(err)
   }
 )

 export default async (url: string, params: any = {}): Promise<any> => {
  const formData = new FormData()

  params && formData.append('hoge', JSON.stringify(params))

  return await instance.post(url, formData)
 }
