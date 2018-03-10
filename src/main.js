export const setPathValue = (layer, path, value) => {
  path = path.split('.')

  for (let i = 0; i < path.length; i++) {
    // if value and is last item
    if (value != null && i + 1 === path.length) { layer[path[i]] = value }
    layer = layer[path[i]] = layer[path[i]] || {}
  }

  return layer
}

export const filterKeysWithDots = (obj) => {
  let keys = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && key.indexOf('.') > -1) {
      keys.push(key)
    }
  }
  return keys
}

// expands keys with .'s to nested objects
export const expandKeys = (obj) => {
  return filterKeysWithDots(obj)
    .reduce(function (obj, key) {
      var keyValue = obj[key]
      setPathValue(obj, key, keyValue)
      delete obj[key]
      return obj
    }, obj)
}
