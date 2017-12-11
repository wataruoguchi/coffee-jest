const coffee = require('coffeescript')
const crypto = require('crypto')

module.exports = {
  process: (src, path) => {
    const script = coffee.compile(
      src,
      {
        bare: true,
        sourceMap: true,
        transpile: {
          presets: ['env']
        }
      }
    )
    return {
      code: script.js,
      map: script.v3SourceMap
    }
  },
  getCacheKey: (fileData, filename, configString) => {
    return crypto.createHash('md5').update(fileData + filename + configString, 'utf8').digest('hex')
  }
}
