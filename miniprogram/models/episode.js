/*
 * @Author: Lac 
 * @Date: 2018-08-22 22:36:56 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-06 10:41:44
 */

import { WXCloud } from '../utils/wx-cloud.js'
 
export class EpisodeModel extends WXCloud {
  getLatest(callback) {
    this.getData({
      collection: 'episode',
      limit: 1,
      success: res => {
        let result = res[0]
        this._setLatestIndex(result.index)
        wx.setStorageSync(this._getKey(result.index), result)
        callback(result)
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
    let saveEpisode = wx.getStorageSync(this._getKey(searchIndex))
    if (!saveEpisode) {
      this.getData({
        collection: 'episode',
        limit: 1,
        query: {
          index: searchIndex
        },
        success: res => {
          let result = res[0]
          wx.setStorageSync(this._getKey(result.index), result)
          callback(result)
        }
      })
    } else {
      callback(saveEpisode)
    }
  }

  getOneEpisode(index, callback) {
    let searchIndex = Number(index)
    this.getData({
      collection: 'episode',
      query: {
        index: searchIndex
      },
      success: res => {
        let result = res[0]
        wx.setStorageSync(this._getKey(result.index), result)
        callback(result)
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

  _getKey(index) {
    let key = 'sengoku-' + index
    return key
  }

}