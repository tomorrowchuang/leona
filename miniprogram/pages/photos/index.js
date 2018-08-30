/*
 * @Author: Lac 
 * @Date: 2018-08-27 22:29:26 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-30 11:43:54
 */

import { PhotoModel } from '../../models/photos'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'
import { errorMsg } from '../../const/const'

let photoModel = new PhotoModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos: [],
    title: '',
    status: DEFAULT,
    heightArr: [],
    errorMsg: errorMsg,
    cols: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData(options.index, options.title)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 下拉回调
   */
  lower: function () {
    console.log('do something~')
  },

  _getData: function (index, title) {
    this.setData({
      title,
      status: PENDING
    })
    wx.nextTick(() => {
      photoModel.getPhotos(index, res => {
        this._handleData(res.photos, this.data.cols)
          .then(res => {
            this.setData({
              photos: res.list,
              heightArr: res.heightArr,
              status: SUCCESS
            })
          })
          .catch(err => {
            this.setData({
              status: FAIL
            })
          })
      })
    })
  },

  _handleData: function (data, cols = 2) {
    return new Promise((resolve, reject) => {
      let gap = 30
      let imgWidth = (750 - gap * 2 - gap * (cols - 1)) / cols
      let list = data
      let heightArr = this.data.heightArr
      for (let i in list) {
        let boxHeight = list[i].h / list[i].w * imgWidth
        if (i < cols && heightArr.length < cols) {
          heightArr.push(boxHeight + gap)
          list[i].position = 'absolute'
          list[i].top = `0`
          list[i].left = i == 0 ? i * imgWidth + 'rpx' : i * imgWidth + gap * i + 'rpx'
        } else {
          let minBoxHeight = Math.min.apply(null, heightArr);
          let minBoxIndex = heightArr.indexOf(minBoxHeight)
          list[i].position = 'absolute'
          list[i].top = `${minBoxHeight}rpx`
          list[i].left = minBoxIndex == 0 ? minBoxIndex * imgWidth + 'rpx' : minBoxIndex * imgWidth + gap * minBoxIndex + 'rpx'
          heightArr[minBoxIndex] += (boxHeight + gap)
        }
      }
      resolve({
        list,
        heightArr
      })
    })
  }
})