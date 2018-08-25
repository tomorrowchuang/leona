/*
 * @Author: Lac 
 * @Date: 2018-08-26 00:58:53 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-26 01:47:47
 */

 import { episodeBeh } from '../beh.js'

 const mMgr = wx.getBackgroundAudioManager() // wx 音频播放模块

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

  attached: function() {
    this._recoverStatus()
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
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

    /**
     * 处理组件加载音乐播放状态
     */
    _recoverStatus: function() {
      // paused 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
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

    /**
     * 监听wx背景music播放事件，并与组件播放状态关联
     */
    _monitorSwitch:function() {
      // 背景音频播放事件
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      // 背景音频暂停事件
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      // 背景音频停止事件
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      // 景音频自然播放结束事件
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})
