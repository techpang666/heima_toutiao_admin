import axios from '@/utils/myAxios'

// 根据文档配置请求(需要传参data)
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}






