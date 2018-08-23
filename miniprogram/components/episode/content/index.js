/*
 * @Author: Lac 
 * @Date: 2018-08-23 18:14:15 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-23 19:22:08
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: ''
  },

  attached: function () {
      let { content } = this.properties
      let name = '「' + content.title + '」'
      this.setData({
        name: name
      })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
