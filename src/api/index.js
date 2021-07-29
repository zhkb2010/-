import request from '../untils/request'

export function ccc(data) {
  return request({
    url: '/wx-pro/vue/admin/kaptcha.do',
    method: 'post',
    data
  })
}