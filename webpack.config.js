const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const distPath = env === 'production'? 'dist': 'test'
const path = require('path')

const ban = {
  name: 'ban',
  mode: env,
  entry: {
    ban: './src/ban.js'
  },
  output: {
    clean: true,
    filename: env === 'production'? '[name].min.js': '[name].js',
    path: path.resolve(__dirname, distPath)
  }
}

module.exports = [
  ban
]