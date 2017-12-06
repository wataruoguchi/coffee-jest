const path = require('path')

module.exports = {
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
        'coffee',
        'js'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/test/$1'
    },
    transform: {
        '^.+\\.coffee$': '<rootDir>/coffee-jest.js'
    }
}
