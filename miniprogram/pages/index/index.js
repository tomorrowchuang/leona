/*
 * @Author: Lac 
 * @Date: 2018-08-21 17:08:03 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-06 10:53:51
 */
import { EpisodeModel } from '../../models/episode'
import { errorMsg } from '../../const/const'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'

let episodeModel = new EpisodeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    episodeData: null,
    status: DEFAULT,
    errMsg: errorMsg,
    isFirst: false,
    isLatest: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!options.index) {
      this._fetchData()
    } else {
      this._fetchOneEpisodeData(options.index)
    }
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
      path: `/pages/index/index?index=${this.data.episodeData.index}`
    }
  },
  
  handlePrev: function () {
    this._updateepisodeData('prev')
  },

  handleNext: function () {
    this._updateepisodeData('next')
  },

  jumpToPhotoList: function () {
    const { index, title } = this.data.episodeData
    wx.navigateTo({
      url: `/pages/photos/index?index=${ index }&title=${ title }`
    })
  },

  _fetchData: function () {
    try{
      episodeModel.getLatest(res => {
        this.setData({
          episodeData: res,
          status: SUCCESS,
          isFirst: res.index === 1 ? true : false
        })
      })
    } catch(err) {
      this.setData({
        status: FAIL
      })
    }
    this.setData({
      status: PENDING
    })
  },

  _fetchOneEpisodeData: function (index) {
    try{
      episodeModel.getOneEpisode(index, res => {
        this.setData({
          episodeData: res,
          status: SUCCESS,
          isFirst: episodeModel.isFirst(res.index),
          isLatest: episodeModel.isLatest(res.index)
        })
      })
    } catch(err) {
      this.setData({
        status: FAIL
      })
    }
    this.setData({
      status: PENDING
    })
  },

  _updateepisodeData: function (nextOrPrev) {
    const { index } = this.data.episodeData
    this.setData({
      status: PENDING
    })
    wx.nextTick(() => {
      episodeModel.getEpisode(index, nextOrPrev, res => {
        this.setData({
          episodeData: res,
          status: SUCCESS,
          isFirst: episodeModel.isFirst(res.index),
          isLatest: episodeModel.isLatest(res.index)
        })
      })
    })
  }
})