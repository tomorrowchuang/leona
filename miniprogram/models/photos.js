/*
 * @Author: Lac
 * @Date: 2018-08-28 23:05:56
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-28 23:24:35
 */

import { WXCloud } from '../utils/wx-cloud.js'

export class PhotoModel extends WXCloud {
  getPhotos (index, callback) {
    let searchIndex = Number(index)
    this.getData({
      collection: 'photos',
      query: {
        index: searchIndex
      },
      success: res => {
        let result = res[0]
        callback(result)
      }
    })
  }
}
