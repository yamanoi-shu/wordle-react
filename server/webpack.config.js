module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  resolve: {
    fallback: {
      "url": false,
      "fs": false,
			"child_process": false,
			"request": false,
			"net": false,
			"worker_threads": false,
			"tls": false
    }
  },
  target: "node",
  mode: "development"
}
