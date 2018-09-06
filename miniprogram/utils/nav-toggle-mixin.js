/*
 * @Author: Lac
 * @Date: 2018-08-30 15:31:56
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-30 15:52:36
 */

import { NavBarTitleToggle } from './nav-bar-title-toggle'

export default (titles) => {
  return {
    titleBottomBoundary: 0,
    navBarTitleToggle: new NavBarTitleToggle(titles),

    onReady: function () {
      this._setBottomBoudary()
    },

    _setBottomBoudary: function () {
      let selectorQuery = wx.createSelectorQuery()
      let pageTitle = selectorQuery.select('#page-title')
      if (pageTitle) {
        pageTitle.boundingClientRect((rect) => {
          let { bottom } = rect
          this.titleBottomBoundary = bottom
        }).exec()
      }
    },

    onPageScroll: function (e) {
      let { scrollTop } = e
      let titleBottomBoundary = this.titleBottomBoundary

      if (scrollTop > titleBottomBoundary) {
        this.navBarTitleToggle.toggle(1)
      } else {
        this.navBarTitleToggle.toggle(0)
      }
    }
  }
}
