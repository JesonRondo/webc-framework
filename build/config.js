const path = require('path')

const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')

const version = 1

function banner (name) {
  return '/*!\n' +
          ' * ' + name + '.js v' + version + '\n' +
          ' * (c) 2014-' + new Date().getFullYear() + ' LongZhou\n' +
          ' * Released under the MIT License.\n' +
          ' */'
}

const frameworkBanner = banner('framework')
const bridgeBanner = banner('jsbridge')

const aliases = require('./alias')

const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}

const builds = {
  'framework-dev': {
    entry: resolve('src/entry/framework.js'),
    dest: resolve('dist/framework.js'),
    format: 'umd',
    env: 'development',
    banner: frameworkBanner
  },
  'framework-prod': {
    entry: resolve('src/entry/framework.js'),
    dest: resolve('dist/framework.min.js'),
    format: 'umd',
    env: 'production',
    banner: frameworkBanner
  },
  'jsbridge-es': {
    entry: resolve('src/entry/jsbridge.js'),
    dest: resolve('dist/jsbridge.js'),
    format: 'es',
    env: 'development',
    banner: bridgeBanner
  },
  'jsbridge-prod': {
    entry: resolve('src/entry/jsbridge.js'),
    dest: resolve('dist/jsbridge.min.js'),
    format: 'umd',
    env: 'production',
    banner: bridgeBanner
  }
}

function genConfig (opts) {
  const config = {
    input: opts.entry,
    output: {
      file: opts.dest,
      format: opts.format
    },
    banner: opts.banner,
    name: 'webc',
    plugins: [
      buble(),
      alias(Object.assign({}, aliases, opts.alias))
    ]
  }

  if (opts.env) {
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET])
} else {
  exports.getBuild = name => genConfig(builds[name])
  exports.getAllBuilds = () => Object.keys(builds).map(name => genConfig(builds[name]))
}
