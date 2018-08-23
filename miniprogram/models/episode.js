/*
 * @Author: Lac 
 * @Date: 2018-08-22 22:36:56 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-23 16:07:08
 */
import { WXCloud } from '../utils/wx-cloud.js'

 
export class EpisodeModel extends WXCloud {
  getLatest(callback) {
    this.getCount({
      collection: 'episode',
      query: {},
      success: index => {
        this.getData({
          collection: 'episode',
          query: { index: index},
          success: res => {
            callback(res)
          }
        })
      }
    })
  }
}