/*
 * @Author: Lac 
 * @Date: 2018-09-05 16:48:52 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-05 22:11:19
 */
import { SongModel } from '../../models/song'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'
import { errorMsg } from '../../const/const'
import navToggleMixin from '../../utils/nav-toggle-mixin'
import mergePage from '../../utils/merge-page'

let songModel = new SongModel()

Page(mergePage(navToggleMixin(['', '歌詞']) ,{

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    title: '',
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
      songModel.getLyric(index, res => {
        console.log(res)
      })
    })
  }
}))