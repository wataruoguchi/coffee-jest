const findBabelConfig = require('find-babel-config')

var defaultBabelOptions = {
  presets: [require.resolve('babel-preset-env')]
}

module.exports = function getBabelConfig () {
  const { file, config } = findBabelConfig.sync(process.cwd(), 0)
  const babelConfig = file ? config : defaultBabelOptions
  return babelConfig
}
