/*
 * @Author: Lac
 * @Date: 2018-08-23 18:14:15
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-19 15:27:49
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
    name: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function () {
      this.triggerEvent('more', {})
    }
  }
})
