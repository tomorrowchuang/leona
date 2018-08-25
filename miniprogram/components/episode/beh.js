export const episodeBeh = Behavior({
  attached: function () {
    let {
      content
    } = this.properties
    let name = '「' + content.title + '」'
    this.setData({
      name
    })
  }
})