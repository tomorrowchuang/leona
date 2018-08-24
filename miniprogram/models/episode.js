/*
 * @Author: Lac 
 * @Date: 2018-08-22 22:36:56 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 11:22:15
 */
import { WXCloud } from '../utils/wx-cloud.js'

 
export class EpisodeModel extends WXCloud {
  getLatest(callback) {
      this.getData({
        collection: 'episode',
        limit: 1,
        success: res => {
          callback(res)
        }
      })
  }
}