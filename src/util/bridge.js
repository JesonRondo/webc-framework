import { appendParams } from 'util/query'

const bridge = {
  request (opts) {
    const options = {
      url: opts.url,
      method: opts.method || 'GET',
      dataType: opts.dataType || 'json'
    }

    if (options.method === 'GET') {
      if (opts.data) {
        options.url = appendParams(options.url, opts.data)
      }
    }

    __bridge.call('request', {
      opts: options
    }, (err, res) => {
      if (err) {
        opts.fail && opts.fail()
      } else {
        opts.success && opts.success(res)
      }
      opts.complete && opts.complete()
    })
  },
  navigate: {
    push (path) {
      __bridge.call('navigate.push', {
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
    patch (target, html) {
      __bridge.call('nodeOpt.patch', {
        target,
        html: html
      })
    }
  }
}

export default bridge
