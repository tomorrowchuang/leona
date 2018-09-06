/*
 * @Author: Lac
 * @Date: 2018-08-22 22:33:28
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-22 22:59:38
 */

function createDefaultConfig () {
  return {
    url: '',
    method: 'GET',
    data: null,
    header: {
      'content-type': 'application/json'
    },
    dataType: 'json'
  }
}

function Request (config) {
  let _config = Object.assign({}, createDefaultConfig(), config)

  if (!_config.header) {
    _config.header = {}
  }

  // set cookie in header
  if (!_config.header.Cookie) {
    let bid = wx.getStorageSync('bid')
    _config.header.Cookie = `bid=${bid}`
  }

  if (!_config.header.Authorization) {
    let access_token = wx.getStorageSync('access_token')
    _config.header.Authorization = `Bearer ${access_token}`
  }

  return new Promise((resolve, reject) => {
    let _url = _config.url
    for (let key in _config.data) {
      let reg = new RegExp(`:${key}`, 'gi')
      if (reg.test(_url)) {
        _url = _url.replace(reg, _config.data[key])
        delete _config.data[key]
      }
    }

    wx.request({
      url: _url,
      method: _config.method,
      data: _config.data,
      header: _config.header,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      }
    })
  })
}

function createRequest (method) {
  return function (url, data, header, dataType) {
    return new Request({
      url,
      data,
      method,
      header,
      dataType
    })
  }
}

const Fetch = {
  get: createRequest('GET'),
  post: createRequest('POST'),
  put: createRequest('PUT'),
  delete: createRequest('DELETE')
}

export default Fetch
