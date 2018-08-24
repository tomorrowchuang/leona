/*
 * @Author: Lac 
 * @Date: 2018-08-24 11:56:35 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 14:46:35
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isFirst: Boolean,
    isLatest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePreClick: function (ev) {
      if (!this.properties.isFirst) this.triggerEvent('pre', {})
    },

    handleNextClick: function (ev) {
      if (!this.properties.isLatest) this.triggerEvent('next', {})
    }
  }
})
