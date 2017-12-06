const es6 = require('./res/es6.coffee').default

describe('es6.coffee', () => {
    it('is able to load es6', () => {
        expect(typeof es6).toBe('object')
    })
    it('is able to get name', () => {
        expect(typeof es6.getName).toBe('function')
        expect(es6.getName()).toBe('Americano')
    })
    it('is able to get result of "add"', () => {
        expect(typeof es6.add).toBe('function')
        expect(es6.add(1, 2)).toBe(3)
        expect(es6.add('Hello ', 'World')).toBe('Hello World')
    })
})
