/*!
 * jsbridge.js v1
 * (c) 2014-2017 LongZhou
 * Released under the MIT License.
 */
var bridge$1 = {
  navigation: {
    push: function push (path) {
      __bridge.call('navigation.push', {
        path: path
      });
    }
  },
  nodeOpt: {
    addStyleElement: function addStyleElement (target, elm) {
      __bridge.call('nodeOpt.addStyleElement', {
        target: target,
        element: elm
      });
    },
    appendStyleNode: function appendStyleNode (target, elm, node) {
      __bridge.call('nodeOpt.appendStyleNode', {
        target: target,
        element: elm,
        node: node
      });
    },
    mount: function mount (target, html) {
      __bridge.call('nodeOpt.mount', {
        target: target,
        html: html
      });
    }
  }
};

var viewMap = {};

function poster (win, msg) {
  win.postMessage({
    cmd: msg.cmd,
    payload: msg.data
  }, 'http://localhost:8080');
  msg.callback && msg.callback();
}

function postMessage (name, cmd, data, callback) {
  if (viewMap[name]) {
    if (viewMap[name].ready) {
      var win = viewMap[name].win;
      poster(win, { cmd: cmd, data: data, callback: callback });
    } else {
      viewMap[name].queue.push({
        cmd: cmd,
        data: data,
        callback: callback
      });
    }
  }
}

var mockApi = {
  call: function call (cmd, data, callback) {
    var name;

    switch (cmd) {
      case 'navigation.push':
        name = data.path;
        viewMap[name] = {
          win: open('/static/view.html', name),
          ready: false,
          queue: []
        };
        setTimeout(function () {
          viewMap[name].ready = true;
          var ref = viewMap[name];
          var win = ref.win;
          var queue = ref.queue;
          while (queue.length > 0) {
            var msg = queue.shift();
            poster(win, msg);
          }
        }, 1000);
        break

      case 'nodeOpt.mount':
      case 'nodeOpt.addStyleElement':
      case 'nodeOpt.appendStyleNode':
        name = data.target;
        postMessage(name, cmd.split('.')[1], data, callback);
        break

      default:
        console.log(cmd);
        break
    }
  }
};

/**
 * for Web
 */
if (navigator.userAgent.indexOf('WebC') < 0) { // for web debug
  var win = window;

  win.__bridge = mockApi;
  win.webc = bridge$1;
}

export default bridge$1;
