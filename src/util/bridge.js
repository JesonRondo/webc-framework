const bridge = {
  navigation: {
    openView (id) {
      __bridge.call('navigation.openView', {
        id: id
      })
    }
  },
  nodeOpt: {
    addStyleElement (target, elm) {
      __bridge.call('nodeOpt.addStyleElement', {
        target: target,
        element: elm
      })
    },
    appendStyleNode (target, elm, node) {
      __bridge.call('nodeOpt.appendStyleNode', {
        target: target,
        element: elm,
        node: node
      })
    },
    mount (target, html) {
      __bridge.call('nodeOpt.mount', {
        target: target,
        html: html
      })
    }
  }
}

export default bridge
