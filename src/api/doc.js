import Element from 'clz/element'
import TextNode from 'clz/text-node'
import Comment from 'clz/comment'
import { changeSign } from 'util/dom'

class Document {
  constructor () {
    this.root = this.createElement('html')
    this.main = this.createElement('body')
  }

  createElement (tag) {
    const el = new Element(tag)
    changeSign(el)
    return el
  }

  createTextNode (text) {
    return new TextNode(text)
  }

  createComment (text) {
    return new Comment(text)
  }

  get documentElement () {
    return this.root
  }

  get body () {
    return this.main
  }
}

export default new Document
