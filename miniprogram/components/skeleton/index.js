/*
 * @Author: Lac
 * @Date: 2018-08-22 23:00:48
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-18 18:56:22
 */

Component({
  properties: {
    // 几条数据 1-10
    cardAmount: {
      type: Number,
      value: 3
    },

    // 颜色
    color: {
      type: String,
      value: '#F4F4F4'
    },

    // 背景颜色
    backgroundColor: {
      type: String,
      value: '#fff'
    },

    // 自定义卡片样式
    cardStyle: {
      type: String,
      value: ''
    },

    // 几条横线 1-4
    strokeAmount: {
      type: Number,
      value: 3
    },

    // 横线尺寸 rpx
    strokeSize: {
      type: Number,
      value: 20
    },

    // 是否显示封面（灰色方块）
    cover: {
      type: Boolean,
      value: true
    },

    // 封面位置 left right
    coverPosition: {
      type: String,
      value: 'left'
    },
    // 封面图宽 rpx
    coverWidth: {
      type: Number,
      value: 200
    },
    // 封面图高 rpx
    coverHeight: {
      type: Number,
      value: 200
    }
  },

  data: {
    tempCardList: [],
    strokeList: []
  },

  methods: {

  },

  attached () {
    let { cardAmount, strokeAmount } = this.properties

    let tempCardList = [...Array(cardAmount).keys()]
    let strokeList = [...Array(strokeAmount).keys()]
    this.setData({
      tempCardList: tempCardList,
      strokeList: strokeList
    })
  }
})
