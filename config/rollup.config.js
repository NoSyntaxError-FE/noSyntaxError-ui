import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import { getFileName } from './utils'

const defaultConfig = {
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    resolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    postcss({
      extract: true,
      modules: true
    }),
    commonjs()
  ]
}
const fileList = getFileName()

export default fileList.map(item => ({
  ...defaultConfig,
  input: `src/components/${item}/index.js`,
  output: {
    file: `dist/components/${item}.js`
  }
}))
