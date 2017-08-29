import Element from 'clz/element'
import TextNode from 'clz/text-node'
import Comment from 'clz/comment'

class Document {
  constructor () {
    this.root = this.createElement('html')
    this.main = this.createElement('body')
  }

  createElement (tag) {
    return new Element(tag)
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
