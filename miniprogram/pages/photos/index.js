/*
 * @Author: Lac
 * @Date: 2018-08-27 22:29:26
 * @Last Modified by: Lac
 * @Last Modified time: 2018-12-23 22:41:11
 */

import { PhotoModel } from '../../models/photos'
import { DEFAULT, PENDING, SUCCESS, FAIL } from '../../const/async-status'
import { errorMsg } from '../../const/const'
import handlePhotosData from '../../utils/handle-photos-data'
import navToggleMixin from '../../utils/nav-toggle-mixin'
import mergePage from '../../utils/merge-page'
import ImgLoader from '../../components/img-loader/img-loader'

let photoModel = new PhotoModel()

Page(mergePage(navToggleMixin(['', '画像']), {

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
    //初始化图片预加载组件，并指定统一的加载完成回调
    this.imgLoader = new ImgLoader(this, this._imageOnLoad)
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

  _getData: function (index, title) {
    this.setData({
      title,
      status: PENDING
    })
    wx.nextTick(() => {
      photoModel.getPhotos(index, res => {
        handlePhotosData(res.photos, this.data.cols, this.data.heightArr)
          .then(res => {
            this.setData({
              photos: res.list,
              heightArr: res.heightArr,
              status: SUCCESS
            }, () => {
              this._loadImages(res.list)
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
  _imageOnLoad: function(err, data) {
    console.log('图片加载完成', err, data.src)
    const ret = this.data.photos.map(item => {
      if (item.url == data.src) {
        item.loaded = true
      }
      return item
    })
    this.setData({
      photos: ret
    })
  },
  _loadImages: function (imgs) {
    //同时发起全部图片的加载
    imgs.forEach(item => {
      this.imgLoader.load(item.url)
    })
  }
}))
