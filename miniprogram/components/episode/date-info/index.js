/*
 * @Author: Lac 
 * @Date: 2018-08-23 16:58:43 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-24 18:22:29
 */
import { months } from '../../../const/const.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ep: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 2018,
    month: ''
  },

  attached: function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    this.setData({
      year,
      month: months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
