const coffee = require('coffeescript')
const crypto = require('crypto')

module.exports = {
    process: (src, path) => {
        const script = coffee.compile(
            src,
            {
                bare: true,
                transpile: {
                    presets: ['es2015']
                }
            }
        )
        return {
            code: script
        }
    },
    getCacheKey: (fileData, filename, configString) => {
        return crypto.createHash('md5').update(fileData + filename + configString, 'utf8').digest('hex')
    }
}
