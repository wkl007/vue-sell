import request from 'api/request'

export default class ApiServer {
  // 获取商家信息
  static getSeller (params) {
    let url = `seller.json`
    return request({
      url: url,
      method: 'get',
      params: params,
    })
  }

  // 获取商品信息
  static getGoods (params) {
    let url = `goods.json`
    return request({
      url: url,
      method: 'get',
      params: params,
    })
  }

  // 获取评论信息
  static getRatings (params) {
    let url = `ratings.json`
    return request({
      url: url,
      method: 'get',
      params: params,
    })
  }
}
