const bridge = {
  navigation: {
    push (path) {
      __bridge.call('navigation.push', {
        path
      })
    }
  },
  nodeOpt: {
    addStyleElement (target, elm) {
      __bridge.call('nodeOpt.addStyleElement', {
        target,
        element: elm
      })
    },
    appendStyleNode (target, elm, node) {
      __bridge.call('nodeOpt.appendStyleNode', {
        target,
        element: elm,
        node: node
      })
    },
    mount (target, html) {
      __bridge.call('nodeOpt.mount', {
        target,
        html: html
      })
    }
  }
}

export default bridge
