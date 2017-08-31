import CSSStyleDeclaration from 'clz/CSSStyleDeclaration'

export default class Element {
  constructor (tag) {
    this.type = 'tag'
    this.name = tag
    this.nodeType = 1
    this.parent = undefined
    this.children = []

    this.style = new CSSStyleDeclaration()
    this.attribs = {}
  }

  hasAttribute (key) {
    return !!this.attribs[key]
  }

  setAttribute (key, val) {
    this.attribs[key] = val
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
    return this.name
  }
}
