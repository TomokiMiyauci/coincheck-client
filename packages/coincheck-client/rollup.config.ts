import { RollupOptions } from 'rollup'
import { main } from './package.json'
import alias from '@rollup/plugin-alias'
import { join } from 'path'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
const config = {
  input: 'src/index.ts',

  output: {
    file: main,
    format: 'cjs'
  },

  plugins: [
    alias({
      entries: [{ find: /^@\//, replacement: join(__dirname, 'src', '/') }]
    }),
    commonjs(),
    typescript()
  ]
}

export default config
