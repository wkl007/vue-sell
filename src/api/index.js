import request from 'api/request'

export default class ApiServer {
  // 获取商家信息
  static getSeller () {
    let url = `api/seller`
    return request({
      url: url,
      method: 'get',
    })
  }

  // 获取商品信息
  static getGoods () {
    let url = `api/goods`
    return request({
      url: url,
      method: 'get',
    })
  }

  // 获取评论信息
  static getRatings () {
    let url = `api/ratings`
    return request({
      url: url,
      method: 'get',
    })
  }
}
