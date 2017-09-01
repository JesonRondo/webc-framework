const jsonp = require('jsonp')

const viewMap = {}

function poster (win, msg) {
  win.postMessage({
    cmd: msg.cmd,
    payload: msg.data
  }, 'http://localhost:8080')
  msg.callback && msg.callback()
}

function postMessage (name, cmd, data, callback) {
  if (viewMap[name]) {
    if (viewMap[name].ready) {
      const win = viewMap[name].win
      poster(win, { cmd, data, callback })
    } else {
      viewMap[name].queue.push({
        cmd,
        data,
        callback
      })
    }
  }
}

export default {
  call (cmd, data, callback) {
    let name

    switch (cmd) {
      case 'request':
        const opts = data.opts
        if (opts.method === 'GET') {
          jsonp(opts.url, (err, data) => {
            callback(err, {
              header: {},
              statusCode: 200,
              data: data
            })
          })
        } else {
          throw 'not support POST in browser'
        }

        break

      case 'navigate.push':
        name = data.path
        viewMap[name] = {
          win: open('/static/view.html', name),
          ready: false,
          queue: []
        }
        setTimeout(() => {
          viewMap[name].ready = true
          const { win, queue } = viewMap[name]
          while (queue.length > 0) {
            const msg = queue.shift()
            poster(win, msg)
          }
        }, 1000)
        break

      case 'nodeOpt.patch':
      case 'nodeOpt.addStyleElement':
      case 'nodeOpt.appendStyleNode':
        name = data.target
        postMessage(name, cmd.split('.')[1], data, callback)
        break

      default:
        console.log('unkown bridge: ' + cmd)
        break
    }
  }
}