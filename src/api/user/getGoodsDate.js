import axios from 'axios'

export function getGoodsDate (params) {
  alert(params)
  return axios.get('/api/goods')
}
