/*!
 * framework.js v1
 * (c) 2014-2017 LongZhou
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class Element {
  constructor (tag) {
    this.tag = tag;
    this.parent = undefined;
    this.nodeType = 1;
    this.children = [];

    this.sty = {};
    this.attrs = {};
  }

  set style (v) {
    console.log(v);
  }

  get style () {
    return {a: 1}
  }

  hasAttribute (key) {
    return !!this.attrs[key]
  }

  setAttribute (key, val) {
    this.attrs[key] = val;
  }

  insertBefore (node, reference) {
    node.parent = this;
    this.children.splice(this.children.indexOf(reference), 0, node);
  }

  removeChild (child) {
    child.parent = undefined;
    this.children.splice(this.children.indexOf(child), 1);
  }

  appendChild (child) {
    child.parent = this;
    this.children.push(child);
  }

  get parentNode () {
    return this.parent
  }

  get nextSibling () {
    if (!this.parent) {
      return null
    } else {
      const siblings = this.parent.children;
      const nextIndex = siblings.indexOf(this) + 1;

      return siblings[nextIndex] || null
    }
  }

  get tagName () {
    return this.tag
  }
}

class TextNode {
  constructor (text) {
    this.text = text;
    this.nodeType = 3;
  }
}

class TextNode$1 {
  constructor (text) {
    this.text = text;
    this.nodeType = 8;
  }
}

class Document {
  constructor () {
    this.root = this.createElement('html');
    this.main = this.createElement('body');
  }

  createElement (tag) {
    return new Element(tag)
  }

  createTextNode (text) {
    return new TextNode(text)
  }

  createComment (text) {
    return new TextNode$1(text)
  }

  get documentElement () {
    return this.root
  }

  get body () {
    return this.main
  }
}

var doc = new Document;

var nav = {
  userAgent: 'WebC/1.0 WebCApi/1.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143'
};

const bridge = {
  navigation: {
    openView (id) {
      __bridge.call('navigation.openView', {
        id: id
      });
    }
  },
  nodeOpt: {
    addStyleElement (target, elm) {
      __bridge.call('nodeOpt.addStyleElement', {
        target: target,
        element: elm
      });
    },
    appendStyleNode (target, elm, node) {
      __bridge.call('nodeOpt.appendStyleNode', {
        target: target,
        element: elm,
        node: node
      });
    },
    mount (target, html) {
      __bridge.call('nodeOpt.mount', {
        target: target,
        html: html
      });
    }
  }
};

const win = window;

win.document = doc;
win.navigator = nav;
win.webc = bridge;

})));
