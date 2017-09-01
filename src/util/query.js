// 添加参数
export const appendParams = function (url, data) {
  if (!data || typeof data !== 'object') {
    return url
  }

  const appendSign = url.indexOf('?') > -1 ? '&' : '?'
  const hashSplitArr = url.split('#')

  const strArr = []
  for (let d in data) {
    strArr.push(`${d}=${encodeURIComponent(data[d])}`)
  }

  hashSplitArr[0] += appendSign + strArr.join('&')
  return hashSplitArr.join('#')
}
