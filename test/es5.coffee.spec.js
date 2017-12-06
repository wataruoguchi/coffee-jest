const es5 = require('./res/es5.coffee')

describe('es5.coffee', () => {
    it('is able to load es5', () => {
        expect(typeof es5).toBe('function')
    })
    it('is able to get name', () => {
        expect(typeof es5.getName).toBe('function')
        expect(es5.getName()).toBe('Americano')
    })
    it('is able to get result of "add"', () => {
        expect(typeof es5.add).toBe('function')
        expect(es5.add(1, 2)).toBe(3)
        expect(es5.add('Hello ', 'World')).toBe('Hello World')
    })
})
