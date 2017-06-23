Reference: https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460

Installation / Prerequisite:
- Run `npm install -g webpack` (to install globally)

### Part 1

- Make sure `webpack.config.js` exists in root folder of project
- Run `webpack` in root folder to generate the `bundle.js`
- The resulting `bundle.js` can then be used in your html page.

### Part 2

- Run `webpack-dev-server` to start webpack server (separate from react server)
- Access and navigate to `src/06-sample-webpack/index.html` from `localhost:8080`
- See the `bundle.js` in action!
- To auto run webpack whenever changes occur, run `webpack --watch` in cmd, and then add `watch: true` in the `webpack.config.js`

### Notes
- `webpack` and `webpack-dev-server` are two different things.
- `webpack` only packs your files into a `bundle.js`.
- `webpack-dev-server` runs a server that serves a saved-in-memory version of `bundle.js`
- This means, if you only run `webpack-dev-server` and modify .js files, your `localhost:8080` will hotload (auto-refresh) the changes, but it will not update your local `bundle.js`.
- This explains why you need to do a `webpack --watch` separately. Yes, it also means you are running two servers (one for `webpack --watch`, another for `webpack-dev-server`).