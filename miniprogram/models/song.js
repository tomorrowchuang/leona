/*
 * @Author: Lac 
 * @Date: 2018-09-05 16:58:13 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-05 22:21:17
 */

import { WXCloud } from '../utils/wx-cloud.js'

export class SongModel extends WXCloud {
  getLyric(index, callback) {
    let searchIndex = Number(index)
    this.getData({
      collection: 'music',
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