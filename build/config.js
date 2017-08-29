const path = require('path')

const replace = require('rollup-plugin-replace')
const alias = require('rollup-plugin-alias')

const version = 1

const banner =
  '/*!\n' +
  ' * framework.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' LongZhou\n' +
  ' * Released under the MIT License.\n' +
  ' */'

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
  'dev': {
    entry: resolve('src/index.js'),
    dest: resolve('dist/framework.js'),
    format: 'umd',
    env: 'development',
    banner
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
  throw 'no target'
}
