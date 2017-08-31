import cssMap from 'util/css-map'

export default class CSSStyleDeclaration {
  constructor () {
    this._style = {}
    this._defaultStyle = {}

    for (let k in cssMap) {
      ((curk) => {
        this._defaultStyle[curk] = cssMap[curk]
        Object.defineProperty(this, curk, {
          get () {
            return this._style[curk] || this._defaultStyle[curk]
          },
          set (val) {
            this._style[curk] = val
          }
        })
      })(k)
    }
  }
}
