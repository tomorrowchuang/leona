/*
 * @Author: Lac 
 * @Date: 2018-09-18 16:40:02 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-18 18:22:16
 */

import { MovieInfoModel } from '../../models/movie-info'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'
import { errorMsg } from '../../const/const'

let movieInfoModel = new MovieInfoModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData: null,
    status: DEFAULT,
    errorMsg: errorMsg
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { index } = options
    this._fetchData(index)
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

  _fetchData: function (index) {
    this.setData({
      status: PENDING
    })
    wx.nextTick(() => {
      try {
        movieInfoModel.getMovieInfo(index, res => {
          console.log(res)
          this.setData({
            status: SUCCESS,
            infoData: res
          })
        })
      } catch (err) {
        this.setData({
          status: FAIL
        })
      }
    })
  }
})