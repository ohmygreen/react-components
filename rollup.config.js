import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './dist/prod.js' : './dist/dev.js';

export default [
  {
    input: './src/index.js',
    output: {
      file: outputFile,
      format: 'cjs',
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
];
