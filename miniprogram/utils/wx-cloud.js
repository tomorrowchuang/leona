/*
 * @Author: Lac 
 * @Date: 2018-08-23 15:18:50 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-23 15:45:14
 */
import { fetchMsg } from "../const/const.js";
 
export class WXCloud {
  /**
   * Query.get
   * @param { collection, query, success } params 
   */
  getData(params) {
    params.query = params.query ? params.query : {}
    const db = wx.cloud.database()
    db.collection(params.collection).where(params.query).get({
      success: function(res) {
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
  getCount(params) {
    params.query = params.query ? params.query : {}
    const db = wx.cloud.database()
    db.collection(params.collection).where(params.query).count({
      success: function(res) {
        params.success && params.success(res.total)
      },
      fail: (err) => {
        this._show_error()
      }
    })
  }

  _show_error() {
    wx.showToast({
      title: fetchMsg,
      icon: 'none',
      duration: 2000
    })
  }
}