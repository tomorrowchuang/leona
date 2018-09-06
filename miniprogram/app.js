/*
 * @Author: Lac
 * @Date: 2018-08-23 14:13:13
 * @Last Modified by:   Lac
 * @Last Modified time: 2018-08-23 14:13:13
 */

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init()
    }

    this.globalData = {}
  }
})
