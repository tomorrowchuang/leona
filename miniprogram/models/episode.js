/*
 * @Author: Lac 
 * @Date: 2018-08-22 22:36:56 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 15:34:26
 */

import { WXCloud } from '../utils/wx-cloud.js'
 
export class EpisodeModel extends WXCloud {
  getLatest(callback) {
    this.getData({
      collection: 'episode',
      limit: 1,
      success: res => {
        this._setLatestIndex(res.index)
        callback(res)
      }
    })
  }

  isLatest(index) {
    return this._getLatestIndex() === index ? true : false
  }

  isFirst(index) {
    return index === 1 ? true : false
  }

  getEpisode(index, nextOrPrev, callback) {
    let searchIndex = nextOrPrev === 'next' ? index - 1 : index + 1
    this.getData({
      collection: 'episode',
      limit: 1,
      query: {
        index: searchIndex
      },
      success: res => {
        this._setLatestIndex(res.index)
        callback(res)
      }
    })
  }

  /**
   * save lastest index
   */
  _setLatestIndex(index) {
    try {
      wx.setStorageSync('lastIndex', index)
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * get lastest index
   */
  _getLatestIndex() {
    try {
      return wx.getStorageSync('lastIndex')
    } catch (err) {
      console.log(err)
    }
  }

}