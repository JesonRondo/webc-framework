/*!
 * framework.js v1
 * (c) 2014-2017 LongZhou
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var cssMap = {
  alignContent: "",
  alignItems: "",
  alignSelf: "",
  alignmentBaseline: "",
  all: "",
  animation: "",
  animationDelay: "",
  animationDirection: "",
  animationDuration: "",
  animationFillMode: "",
  animationIterationCount: "",
  animationName: "",
  animationPlayState: "",
  animationTimingFunction: "",
  backfaceVisibility: "",
  background: "",
  backgroundAttachment: "",
  backgroundBlendMode: "",
  backgroundClip: "",
  backgroundColor: "",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPosition: "",
  backgroundPositionX: "",
  backgroundPositionY: "",
  backgroundRepeat: "",
  backgroundRepeatX: "",
  backgroundRepeatY: "",
  backgroundSize: "",
  baselineShift: "",
  blockSize: "",
  border: "",
  borderBottom: "",
  borderBottomColor: "",
  borderBottomLeftRadius: "",
  borderBottomRightRadius: "",
  borderBottomStyle: "",
  borderBottomWidth: "",
  borderCollapse: "",
  borderColor: "",
  borderImage: "",
  borderImageOutset: "",
  borderImageRepeat: "",
  borderImageSlice: "",
  borderImageSource: "",
  borderImageWidth: "",
  borderLeft: "",
  borderLeftColor: "",
  borderLeftStyle: "",
  borderLeftWidth: "",
  borderRadius: "",
  borderRight: "",
  borderRightColor: "",
  borderRightStyle: "",
  borderRightWidth: "",
  borderSpacing: "",
  borderStyle: "",
  borderTop: "",
  borderTopColor: "",
  borderTopLeftRadius: "",
  borderTopRightRadius: "",
  borderTopStyle: "",
  borderTopWidth: "",
  borderWidth: "",
  bottom: "",
  boxShadow: "",
  boxSizing: "",
  breakAfter: "",
  breakBefore: "",
  breakInside: "",
  bufferedRendering: "",
  captionSide: "",
  caretColor: "",
  clear: "",
  clip: "",
  clipPath: "",
  clipRule: "",
  color: "",
  colorInterpolation: "",
  colorInterpolationFilters: "",
  colorRendering: "",
  columnCount: "",
  columnFill: "",
  columnGap: "",
  columnRule: "",
  columnRuleColor: "",
  columnRuleStyle: "",
  columnRuleWidth: "",
  columnSpan: "",
  columnWidth: "",
  columns: "",
  contain: "",
  content: "",
  counterIncrement: "",
  counterReset: "",
  cssFloat: "",
  cssText: "",
  cursor: "",
  cx: "",
  cy: "",
  d: "",
  direction: "",
  display: "",
  dominantBaseline: "",
  emptyCells: "",
  fill: "",
  fillOpacity: "",
  fillRule: "",
  filter: "",
  flex: "",
  flexBasis: "",
  flexDirection: "",
  flexFlow: "",
  flexGrow: "",
  flexShrink: "",
  flexWrap: "",
  float: "",
  floodColor: "",
  floodOpacity: "",
  font: "",
  fontDisplay: "",
  fontFamily: "",
  fontFeatureSettings: "",
  fontKerning: "",
  fontSize: "",
  fontStretch: "",
  fontStyle: "",
  fontVariant: "",
  fontVariantCaps: "",
  fontVariantLigatures: "",
  fontVariantNumeric: "",
  fontWeight: "",
  grid: "",
  gridArea: "",
  gridAutoColumns: "",
  gridAutoFlow: "",
  gridAutoRows: "",
  gridColumn: "",
  gridColumnEnd: "",
  gridColumnGap: "",
  gridColumnStart: "",
  gridGap: "",
  gridRow: "",
  gridRowEnd: "",
  gridRowGap: "",
  gridRowStart: "",
  gridTemplate: "",
  gridTemplateAreas: "",
  gridTemplateColumns: "",
  gridTemplateRows: "",
  height: "",
  hyphens: "",
  imageRendering: "",
  inlineSize: "",
  isolation: "",
  justifyContent: "",
  justifyItems: "",
  justifySelf: "",
  left: "",
  letterSpacing: "",
  lightingColor: "",
  lineHeight: "",
  listStyle: "",
  listStyleImage: "",
  listStylePosition: "",
  listStyleType: "",
  margin: "",
  marginBottom: "",
  marginLeft: "",
  marginRight: "",
  marginTop: "",
  marker: "",
  markerEnd: "",
  markerMid: "",
  markerStart: "",
  mask: "",
  maskType: "",
  maxBlockSize: "",
  maxHeight: "",
  maxInlineSize: "",
  maxWidth: "",
  maxZoom: "",
  minBlockSize: "",
  minHeight: "",
  minInlineSize: "",
  minWidth: "",
  minZoom: "",
  mixBlendMode: "",
  objectFit: "",
  objectPosition: "",
  offset: "",
  offsetDistance: "",
  offsetPath: "",
  offsetRotate: "",
  opacity: "",
  order: "",
  orientation: "",
  orphans: "",
  outline: "",
  outlineColor: "",
  outlineOffset: "",
  outlineStyle: "",
  outlineWidth: "",
  overflow: "",
  overflowAnchor: "",
  overflowWrap: "",
  overflowX: "",
  overflowY: "",
  padding: "",
  paddingBottom: "",
  paddingLeft: "",
  paddingRight: "",
  paddingTop: "",
  page: "",
  pageBreakAfter: "",
  pageBreakBefore: "",
  pageBreakInside: "",
  paintOrder: "",
  parentRule: null,
  perspective: "",
  perspectiveOrigin: "",
  placeContent: "",
  placeItems: "",
  placeSelf: "",
  pointerEvents: "",
  position: "",
  quotes: "",
  r: "",
  resize: "",
  right: "",
  rx: "",
  ry: "",
  shapeImageThreshold: "",
  shapeMargin: "",
  shapeOutside: "",
  shapeRendering: "",
  size: "",
  speak: "",
  src: "",
  stopColor: "",
  stopOpacity: "",
  stroke: "",
  strokeDasharray: "",
  strokeDashoffset: "",
  strokeLinecap: "",
  strokeLinejoin: "",
  strokeMiterlimit: "",
  strokeOpacity: "",
  strokeWidth: "",
  tabSize: "",
  tableLayout: "",
  textAlign: "",
  textAlignLast: "",
  textAnchor: "",
  textCombineUpright: "",
  textDecoration: "",
  textDecorationColor: "",
  textDecorationLine: "",
  textDecorationSkip: "",
  textDecorationStyle: "",
  textIndent: "",
  textOrientation: "",
  textOverflow: "",
  textRendering: "",
  textShadow: "",
  textSizeAdjust: "",
  textTransform: "",
  textUnderlinePosition: "",
  top: "",
  touchAction: "",
  transform: "",
  transformOrigin: "",
  transformStyle: "",
  transition: "",
  transitionDelay: "",
  transitionDuration: "",
  transitionProperty: "",
  transitionTimingFunction: "",
  unicodeBidi: "",
  unicodeRange: "",
  userSelect: "",
  userZoom: "",
  vectorEffect: "",
  verticalAlign: "",
  visibility: "",
  webkitAppRegion: "",
  webkitAppearance: "",
  webkitBackgroundClip: "",
  webkitBackgroundOrigin: "",
  webkitBorderAfter: "",
  webkitBorderAfterColor: "",
  webkitBorderAfterStyle: "",
  webkitBorderAfterWidth: "",
  webkitBorderBefore: "",
  webkitBorderBeforeColor: "",
  webkitBorderBeforeStyle: "",
  webkitBorderBeforeWidth: "",
  webkitBorderEnd: "",
  webkitBorderEndColor: "",
  webkitBorderEndStyle: "",
  webkitBorderEndWidth: "",
  webkitBorderHorizontalSpacing: "",
  webkitBorderImage: "",
  webkitBorderStart: "",
  webkitBorderStartColor: "",
  webkitBorderStartStyle: "",
  webkitBorderStartWidth: "",
  webkitBorderVerticalSpacing: "",
  webkitBoxAlign: "",
  webkitBoxDecorationBreak: "",
  webkitBoxDirection: "",
  webkitBoxFlex: "",
  webkitBoxFlexGroup: "",
  webkitBoxLines: "",
  webkitBoxOrdinalGroup: "",
  webkitBoxOrient: "",
  webkitBoxPack: "",
  webkitBoxReflect: "",
  webkitColumnBreakAfter: "",
  webkitColumnBreakBefore: "",
  webkitColumnBreakInside: "",
  webkitFontSizeDelta: "",
  webkitFontSmoothing: "",
  webkitHighlight: "",
  webkitHyphenateCharacter: "",
  webkitLineBreak: "",
  webkitLineClamp: "",
  webkitLocale: "",
  webkitLogicalHeight: "",
  webkitLogicalWidth: "",
  webkitMarginAfter: "",
  webkitMarginAfterCollapse: "",
  webkitMarginBefore: "",
  webkitMarginBeforeCollapse: "",
  webkitMarginBottomCollapse: "",
  webkitMarginCollapse: "",
  webkitMarginEnd: "",
  webkitMarginStart: "",
  webkitMarginTopCollapse: "",
  webkitMask: "",
  webkitMaskBoxImage: "",
  webkitMaskBoxImageOutset: "",
  webkitMaskBoxImageRepeat: "",
  webkitMaskBoxImageSlice: "",
  webkitMaskBoxImageSource: "",
  webkitMaskBoxImageWidth: "",
  webkitMaskClip: "",
  webkitMaskComposite: "",
  webkitMaskImage: "",
  webkitMaskOrigin: "",
  webkitMaskPosition: "",
  webkitMaskPositionX: "",
  webkitMaskPositionY: "",
  webkitMaskRepeat: "",
  webkitMaskRepeatX: "",
  webkitMaskRepeatY: "",
  webkitMaskSize: "",
  webkitMaxLogicalHeight: "",
  webkitMaxLogicalWidth: "",
  webkitMinLogicalHeight: "",
  webkitMinLogicalWidth: "",
  webkitPaddingAfter: "",
  webkitPaddingBefore: "",
  webkitPaddingEnd: "",
  webkitPaddingStart: "",
  webkitPerspectiveOriginX: "",
  webkitPerspectiveOriginY: "",
  webkitPrintColorAdjust: "",
  webkitRtlOrdering: "",
  webkitRubyPosition: "",
  webkitTapHighlightColor: "",
  webkitTextCombine: "",
  webkitTextDecorationsInEffect: "",
  webkitTextEmphasis: "",
  webkitTextEmphasisColor: "",
  webkitTextEmphasisPosition: "",
  webkitTextEmphasisStyle: "",
  webkitTextFillColor: "",
  webkitTextOrientation: "",
  webkitTextSecurity: "",
  webkitTextStroke: "",
  webkitTextStrokeColor: "",
  webkitTextStrokeWidth: "",
  webkitTransformOriginX: "",
  webkitTransformOriginY: "",
  webkitTransformOriginZ: "",
  webkitUserDrag: "",
  webkitUserModify: "",
  webkitWritingMode: "",
  whiteSpace: "",
  widows: "",
  width: "",
  willChange: "",
  wordBreak: "",
  wordSpacing: "",
  wordWrap: "",
  writingMode: "",
  x: "",
  y: "",
  zIndex: "",
  zoom: ""
};

var CSSStyleDeclaration = function CSSStyleDeclaration () {
  var this$1 = this;

  this._style = {};
  this._defaultStyle = {};

  for (var k in cssMap) {
    (function (curk) {
      this$1._defaultStyle[curk] = cssMap[curk];
      Object.defineProperty(this$1, curk, {
        get: function get () {
          return this._style[curk] || this._defaultStyle[curk]
        },
        set: function set (val) {
          this._style[curk] = val;
        }
      });
    })(k);
  }
};

var Element = function Element (tag) {
  this.type = 'tag';
  this.name = tag;
  this.nodeType = 1;
  this.parent = undefined;
  this.children = [];

  this.style = new CSSStyleDeclaration();
  this.attribs = {};
};

var prototypeAccessors$1 = { parentNode: {},nextSibling: {},tagName: {} };

Element.prototype.hasAttribute = function hasAttribute (key) {
  return !!this.attribs[key]
};

Element.prototype.setAttribute = function setAttribute (key, val) {
  this.attribs[key] = val;
};

Element.prototype.insertBefore = function insertBefore (node, reference) {
  node.parent = this;
  this.children.splice(this.children.indexOf(reference), 0, node);
};

Element.prototype.removeChild = function removeChild (child) {
  child.parent = undefined;
  this.children.splice(this.children.indexOf(child), 1);
};

Element.prototype.appendChild = function appendChild (child) {
  child.parent = this;
  this.children.push(child);
};

prototypeAccessors$1.parentNode.get = function () {
  return this.parent
};

prototypeAccessors$1.nextSibling.get = function () {
  if (!this.parent) {
    return null
  } else {
    var siblings = this.parent.children;
    var nextIndex = siblings.indexOf(this) + 1;

    return siblings[nextIndex] || null
  }
};

prototypeAccessors$1.tagName.get = function () {
  return this.name
};

Object.defineProperties( Element.prototype, prototypeAccessors$1 );

var TextNode = function TextNode (text) {
  this.data = text;
  this.type = 'text';
  this.nodeType = 3;
};

var TextNode$2 = function TextNode (text) {
  this.data = text;
  this.type = 'comment';
  this.nodeType = 8;
};

var Document = function Document () {
  this.root = this.createElement('html');
  this.main = this.createElement('body');
};

var prototypeAccessors = { documentElement: {},body: {} };

Document.prototype.createElement = function createElement (tag) {
  return new Element(tag)
};

Document.prototype.createTextNode = function createTextNode (text) {
  return new TextNode(text)
};

Document.prototype.createComment = function createComment (text) {
  return new TextNode$2(text)
};

prototypeAccessors.documentElement.get = function () {
  return this.root
};

prototypeAccessors.body.get = function () {
  return this.main
};

Object.defineProperties( Document.prototype, prototypeAccessors );

var doc = new Document;

var nav = {
  userAgent: 'WebC/1.0 WebCApi/1.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143'
};

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

var bridge = {
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
    mount: function mount (target, html) {
      __bridge.call('nodeOpt.mount', {
        target: target,
        html: html
      });
    }
  }
};

/**
 * for JavaScript Core
 */
var win = window;

win.document = doc;
win.navigator = nav;
win.webc = bridge;

})));
