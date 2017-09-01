/*!
 * jsbridge.js v1
 * (c) 2014-2017 LongZhou
 * Released under the MIT License.
 */
// 添加参数
var appendParams = function (url, data) {
  var appendSign = url.indexOf('?') > -1 ? '&' : '?';
  var hashSplitArr = url.split('#');

  var strArr = [];
  for (var d in data) {
    strArr.push((d + "=" + (encodeURIComponent(data[d]))));
  }

  hashSplitArr[0] += appendSign + strArr.join('&');
  return hashSplitArr.join('#')
};

var bridge$1 = {
  request: function request (opts) {
    var options = {
      url: opts.url,
      method: opts.method || 'GET',
      dataType: opts.dataType || 'json'
    };

    if (options.method === 'GET') {
      if (opts.data) {
        options.url = appendParams(options.url, opts.data);
      }
    }

    __bridge.call('request', {
      opts: options
    }, function (err, res) {
      if (err) {
        opts.fail && opts.fail();
      } else {
        opts.success && opts.success(res);
      }
      opts.complete && opts.complete();
    });
  },
  navigate: {
    push: function push (path) {
      __bridge.call('navigate.push', {
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
    patch: function patch (target, html) {
      __bridge.call('nodeOpt.patch', {
        target: target,
        html: html
      });
    }
  }
};

var jsonp = require('jsonp');

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
      case 'request':
        var opts = data.opts;
        if (opts.method === 'GET') {
          jsonp(opts.url, function (err, data) {
            callback(err, {
              header: {},
              statusCode: 200,
              data: data
            });
          });
        } else {
          throw 'not support POST in browser'
        }

        break

      case 'navigate.push':
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

      case 'nodeOpt.patch':
      case 'nodeOpt.addStyleElement':
      case 'nodeOpt.appendStyleNode':
        name = data.target;
        postMessage(name, cmd.split('.')[1], data, callback);
        break

      default:
        console.log('unkown bridge: ' + cmd);
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
