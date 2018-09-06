/*
 * @Author: Lac
 * @Date: 2018-08-23 16:58:43
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-02 00:44:27
 */
import { months } from '../../../const/const.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ep: String,
    pubdate: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 2018,
    month: ''
  },

  attached: function () {
    const { pubdate } = this.properties
    let data = pubdate.split('-')
    let month = data[1].replace(/0/gi, '') - 1
    this.setData({
      year: data[0],
      month: months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
