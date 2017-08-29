import doc from 'api/doc'
import nav from 'api/nav'
import bridge from 'util/bridge'

const win = window

win.document = doc
win.navigator = nav
win.webc = bridge
