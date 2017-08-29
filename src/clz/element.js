export default class Element {
  constructor (tag) {
    this.tag = tag
    this.parent = undefined
    this.nodeType = 1
    this.children = []

    this.sty = {}
    this.attrs = {}
  }

  set style (v) {
    console.log(v)
  }

  get style () {
    return {a: 1}
  }

  hasAttribute (key) {
    return !!this.attrs[key]
  }

  setAttribute (key, val) {
    this.attrs[key] = val
  }

  insertBefore (node, reference) {
    node.parent = this
    this.children.splice(this.children.indexOf(reference), 0, node)
  }

  removeChild (child) {
    child.parent = undefined
    this.children.splice(this.children.indexOf(child), 1)
  }

  appendChild (child) {
    child.parent = this
    this.children.push(child)
  }

  get parentNode () {
    return this.parent
  }

  get nextSibling () {
    if (!this.parent) {
      return null
    } else {
      const siblings = this.parent.children
      const nextIndex = siblings.indexOf(this) + 1

      return siblings[nextIndex] || null
    }
  }

  get tagName () {
    return this.tag
  }
}
