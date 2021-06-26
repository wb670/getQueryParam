/*
* Date: 2021-06-26 18:29:42
* LastEditors: lion.wang
* FilePath: /getQueryParam/getQueryParam.js
 */
export default function () {
  const search = window.location.search.substr(1) || window.location.hash.split("?")[1] || ""
  const reg = /([^&=]+)=?([^&]*)/g
  const r = search.match(reg)
  let query = {}
  r && r.forEach(v => {
    let query_temp = v.split("=")
    query[query_temp[0]] = query_temp[1]
  })
  function _return(params) {
    if (Object.keys(params).length === 1) {
      params = params[Object.keys(params)[0]]
    }
    if (Object.keys(params).length === 0) {
      params = null
    }
    return params
  }
  if (arguments.length !== 0) {
    const args = [...arguments]
    let temp_return = {}
    args.forEach(key => {
      if (key in query) {
        temp_return[key] = query[key]
      }
    })
    return _return(temp_return)
  }
  return _return(query)
}