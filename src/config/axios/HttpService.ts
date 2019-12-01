import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

type ValidInterceptor = 'request' | 'response' | 'error';

const defaultInterceptors = {
  request: (req: any) => req,
  response: (res: any) => res,
  error: (err: any) => Promise.reject(err)
}

function getAxiosInterceptor (type: ValidInterceptor) {
  try {
    const requiredInterceptor = require(`@/config/axios/interceptors/${type}`)
    return requiredInterceptor.default
  } catch (error) {
    return defaultInterceptors[type]
  }
}

export class HttpService {
  public axiosInstance: AxiosInstance;

  constructor () {
    this.axiosInstance = Axios.create({
      baseURL: process.env.API_URL || process.env.VUE_APP_API_URL
    })
    this.axiosInstance.interceptors.request.use(getAxiosInterceptor('request'))
    this.axiosInstance.interceptors.response.use(getAxiosInterceptor('response'), getAxiosInterceptor('error'))
  }

  public request<T = any> (config: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.request(config)
  }

  public get<T = any> (url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.get(url, config)
  }

  public delete (url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.axiosInstance.delete(url, config)
  }
  public head (url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.axiosInstance.head(url, config)
  }
  public post<T = any> (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.post(url, data, config)
  }
  public put<T = any> (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.put(url, data, config)
  }
  public patch<T = any> (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.patch(url, data, config)
  }
}

const $http = new HttpService()
export default $http
