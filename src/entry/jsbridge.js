/**
 * for Web
 */
import bridge from 'util/bridge'
import mockApi from 'util/bridge-mock-api'

if (navigator.userAgent.indexOf('WebC') < 0) { // for web debug
  const win = window

  win.__bridge = mockApi
  win.webc = bridge
}

export default bridge
