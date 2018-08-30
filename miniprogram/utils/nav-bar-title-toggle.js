/*
 * @Author: Lac 
 * @Date: 2018-08-30 15:33:10 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-30 15:52:48
 */

export class NavBarTitleToggle {
  constructor(titles = ['', '涙曇']) {
    this.titles = titles
    this.currentTitle = titles[0]
  }

  toggle(index) {
    let nextTitle = this.titles[index]
    if (nextTitle !== this.currentTitle) {
      wx.setNavigationBarTitle({
        title: nextTitle,
        success: () => {
          this.currentTitle = nextTitle
        }
      })
    }
  }
}
