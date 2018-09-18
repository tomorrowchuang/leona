/*
 * @Author: Lac 
 * @Date: 2018-09-18 16:53:45 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-18 16:54:57
 */

import { WXCloud } from '../utils/wx-cloud.js'

export class MovieInfoModel extends WXCloud {
  getMovieInfo (index, callback) {
    let searchIndex = Number(index)
    this.getData({
      collection: 'movie-info',
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
