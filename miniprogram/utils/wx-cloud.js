/*
 * @Author: Lac
 * @Date: 2018-08-23 15:18:50
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 11:24:29
 */
import { fetchMsg } from '../const/const.js'

export class WXCloud {
  /**
   * Query.get
   * @param { collection, query, success, limit } params
   */
  getData (params) {
    let query = params.query ? params.query : {}
    let limit = params.limit ? params.limit : 20
    const db = wx.cloud.database()
    db.collection(params.collection)
      .where(query)
      .limit(limit)
      .orderBy('index', 'desc')
      .get({
        success: function (res) {
          params.success && params.success(res.data)
        },
        fail: (err) => {
          this._show_error()
        }
      })
  }

  /**
   * Query.count
   * @param { collection, query, success } params
   */
  getCount (params) {
    let query = params.query ? params.query : {}
    const db = wx.cloud.database()
    db.collection(params.collection)
      .where(query)
      .count({
        success: function (res) {
          params.success && params.success(res.total)
        },
        fail: (err) => {
          this._show_error()
        }
      })
  }

  _show_error () {
    wx.showToast({
      title: fetchMsg,
      icon: 'none',
      duration: 2000
    })
  }
}
