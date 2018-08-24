/*
 * @Author: Lac 
 * @Date: 2018-08-21 17:08:03 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 11:31:42
 */
import { EpisodeModel } from '../../models/episode'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'

let episodeModel = new EpisodeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    episodeData: null,
    status: DEFAULT,
    errMsg: '不妙，出错了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._fetchData()
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
    return {
      // title: this.data.episodeData.title
    }
  },

  _fetchData: function () {
    try{
      episodeModel.getLatest(res => {
        this.setData({
          episodeData: res[0],
          status: SUCCESS
        })
        console.log(this.data)
      })
    } catch(err) {
      this.setData({
        status: FAIL
      })
    }
    this.setData({
      status: PENDING
    })
  }
})