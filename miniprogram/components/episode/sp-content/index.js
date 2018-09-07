/*
 * @Author: Lac
 * @Date: 2018-08-26 00:58:53
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-07 12:25:14
 */

import { episodeBeh } from '../beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [ episodeBeh ],

  properties: {
    content: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '',
    playing: false,
    pauseSrc: './images/pause.png',
    playSrc: './images/play.png'
  },

  attached: function () {
    this._recoverStatus()
    this._monitorSwitch()
  },

  methods: {
    playMusic: function (e) {
      const { content, playing } = this.data
      if (!playing) {
        mMgr.src = content.url
        mMgr.title = content.title
      } else {
        mMgr.pause()
      }
      this.setData({
        playing: !playing
      })
    },

    handleClickTitle: function () {
      const { index, lyric } = this.data.content
      if (lyric && lyric === 1) {
        wx.navigateTo({
          url: `/pages/lyric/index?index=${index}`
        })
      }
    },

    _recoverStatus: function () {
      const { url } = this.properties.content
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src === url) {
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})
