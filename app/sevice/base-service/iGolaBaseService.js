
import {
  BASE_URL,
  TIME_OUT
} from "../../config/app-config.js"


export default function request(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      timeout: TIME_OUT,
      method: options.method || "get",
      data: options.data,
      success: resolve,
      fail: reject
    })
  })
}