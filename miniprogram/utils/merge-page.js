/**
 * merge page
 * object/array/string/number直接覆盖; function, 按照传入的顺序依次执行
 */

function merge() {
  let confs = Array.from(arguments)
  let r = {}
  let callbacks = {}
  confs.forEach((conf) => {
    for (let k in conf) {
      if (conf.hasOwnProperty(k)) {
        let v = conf[k]
        if (typeof (v) === 'function') {
          callbacks[k] = callbacks[k] ? callbacks[k].concat([v]) : [v]
          continue
        }

        if (!r[k]) {
          r[k] = v
        } else if (r[k] && isShouldCover(v)) {
          r[k] = v
        } else {
          throw new Error(`${k} is can not merge, please check the type of ${k}`)
        }
      }
    }
  })

  for (let k in callbacks) {
    if (callbacks.hasOwnProperty(k)) {
      r[k] = function () {
        let args = Array.from(arguments)
        callbacks[k].forEach((cb) => {
          cb.apply(this, args)
        })
      }
    }
  }
  return r
}

// helper
function isShouldCover(v) {
  let type = typeof (v)
  let isObject = Object.prototype.toString.call(v) === '[object Object]'
  let isArray = Array.isArray(v)
  return type === 'string' || type === 'number' || isObject || isArray
}


export default merge