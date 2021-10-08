import { expandKeys } from 'main'

describe('expandKeys', () => {
  it('expands keys', () => {
    const expected = {
      hello: {
        world: 1,
        galaxy: 2
      },
      three: {
        dots: {
          deep: {
            son: {
              wow: true
            }
          }
        }
      },
      foo: 'bar'
    }
    const expanded = expandKeys({
      'hello.world': 1,
      'hello.galaxy': 2,
      'three.dots.deep.son': { wow: true },
      foo: 'bar'
    })
    expect(expanded).toEqual(expected)
  })
})
