import request from '@/api/request.js'

export function refreshData() {
  return request({
    url: '/api/table1/refresh/',
    method: 'get'
  })
}

export function saveData(data) {
  return request({
    url: '/api/table2/data/',
    method: 'get',
    params: data
  })
}

export function getSavedData(data) {
  return request({
    url: '/api/table2/',
    method: 'get',
    params: data
  })
}
