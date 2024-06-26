import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";
import pkg from "./package.json" assert { type: 'json' };

export default {
  input: "src/index.jsx",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" }
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: ["example/**", "node_modules/**"],
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }),
    css({
      include: "src/index.css",
      output: "index.css",
      exclude: ["example/**", "node_modules/**"],
      minify: true,
      inject: true
    }),
    resolve(),
    commonjs(),
    terser()
  ],
  external: Object.keys(pkg.peerDependencies)
};
