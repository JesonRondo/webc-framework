// 标记元素
export function changeSign (el) {
  if (el.getAttribute('_changed')) {
    return
  }

  el.setAttribute('_changed', true)
  if (el.parentNode && !el.parentNode.getAttribute('_changed')) {
    changeSign(el.parentNode)
  }

  window.__update && window.__update()
}