export default class TextNode {
  constructor (text) {
    this.data = text
    this.type = 'comment'
    this.nodeType = 8
    this.parent = undefined
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
}
