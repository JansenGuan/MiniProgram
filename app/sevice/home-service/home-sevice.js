
import request from "../base-service/iGolaBaseService.js"

export function getMultiData(){
  return request({
    url: "/home/multidata"
  })
}

export function getSelectedTabData(type, page) {
  return request({
    url: "/home/data",
    data: {
      type,
      page
    }
  })
}