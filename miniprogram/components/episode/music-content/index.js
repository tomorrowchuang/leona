/*
 * @Author: Lac 
 * @Date: 2018-08-26 00:58:53 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-26 01:16:25
 */

 import { episodeBeh } from '../beh.js'

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
    playing: false,
    pauseSrc: './images/pause.png',
    playSrc: './images/play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playMusic: function (e) {
      console.log(e)
    }
  }
})
