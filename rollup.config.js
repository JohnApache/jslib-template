// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
<% if(locals.useTs){ %>import typescript from 'rollup-plugin-typescript';<%}%>

import path from 'path';
import os from 'os';

const cpuNums = os.cpus().length;
const standard = {
	input: path.resolve(__dirname, './src/index.js'),
	output: {
		file: path.resolve(__dirname, './dist/index.js'),
		format: 'umd',
		name: 'index',
		extend: false,
		sourcemap: false,
	},
	plugins: [
		<% if(locals.useTs){ %>typescript(),<%}%>
		resolve(),
		commonjs(),
		babel({
			runtimeHelpers: true,
		})
	]
};

const minSize = {
	input: path.resolve(__dirname, './src/index.js'),
	output: {
		file: path.resolve(__dirname, './dist/index.min.js'),
		format: 'umd',
		name: 'index',
		extend: false,
		sourcemap: false,
	},
	plugins: [
		<% if(locals.useTs){ %>typescript(),<%}%>
		resolve(),
		commonjs(),
		babel({
			runtimeHelpers: true,
		}),
		terser({
			output: {
				comments: false
			},
			include: [/^.+\.js$/],
			exclude: ['node_moudles/**'],
			numWorkers: cpuNums,
			sourcemap: false
		})
	]
};

export default [standard, minSize];