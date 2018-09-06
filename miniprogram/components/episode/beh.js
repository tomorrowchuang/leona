export const episodeBeh = Behavior({
  attached: function () {
    let {
      content
    } = this.properties
    let name = '「' + content.title + '」'
    this.setData({
      name
    })
  },
  methods: {
    handleLongPress: function (ev) {
      const { content } = ev.currentTarget.dataset
      wx.setClipboardData({
        data: content
      })
    }
  }
})
