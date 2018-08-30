/*
 * @Author: Lac 
 * @Date: 2018-08-30 15:31:35 
 * @Last Modified by:   Lac 
 * @Last Modified time: 2018-08-30 15:31:35 
 */

/**
 * 处理照片墙照片数组
 * data: 需处理Array
 * cols: 照片墙显示列数
 * heightArr: 照片墙列高度Array
 */

export default (data, cols = 2, heightArr) => {
  return new Promise((resolve, reject) => {
    let gap = 30
    let imgWidth = (750 - gap * 2 - gap * (cols - 1)) / cols
    let list = data
    for (let i in list) {
      let boxHeight = list[i].h / list[i].w * imgWidth
      if (i < cols && heightArr.length < cols) {
        heightArr.push(boxHeight + gap)
        list[i].position = 'absolute'
        list[i].top = `0`
        list[i].left = i == 0 ? i * imgWidth + 'rpx' : i * imgWidth + gap * i + 'rpx'
      } else {
        let minBoxHeight = Math.min.apply(null, heightArr);
        let minBoxIndex = heightArr.indexOf(minBoxHeight)
        list[i].position = 'absolute'
        list[i].top = `${minBoxHeight}rpx`
        list[i].left = minBoxIndex == 0 ? minBoxIndex * imgWidth + 'rpx' : minBoxIndex * imgWidth + gap * minBoxIndex + 'rpx'
        heightArr[minBoxIndex] += (boxHeight + gap)
      }
    }
    resolve({
      list,
      heightArr
    })
  })
}