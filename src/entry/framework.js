/**
 * for JavaScript Core
 */
import doc from 'api/doc'
import nav from 'api/nav'
import bridge from 'util/bridge'
import promise from 'clz/promise'

const win = window

win.document = doc
win.navigator = nav
win.webc = bridge
win.Promise = promise
