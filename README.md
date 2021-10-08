# expand-keys
[![Release](https://github.com/patrickleet/expand-keys/actions/workflows/release.yml/badge.svg)](https://github.com/patrickleet/expand-keys/actions/workflows/release.yml)
[![codecov](https://codecov.io/gh/patrickleet/expand-keys/branch/master/graph/badge.svg)](https://codecov.io/gh/patrickleet/expand-keys)

```
describe('expandKeys', () => {
  it('expands keys', () => {
    let expected = {
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
      }
    }
    let expanded = expandKeys({
      'hello.world': 1,
      'hello.galaxy': 2,
      'three.dots.deep.son': { wow: true }
    })
    expect(expanded).toEqual(expected)
  })
})

```
