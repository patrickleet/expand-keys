export const setPathValue = (layer, path, value) => {
  path = path.split('.')

  for (let i = 0; i < path.length; i++) {
    // if value and is last item
    if (value != null && i + 1 === path.length) { layer[path[i]] = value }
    layer = layer[path[i]] = layer[path[i]] || {}
  }

  return layer
}

// expands keys with .'s to nested objects
export const expandKeys = (obj) => {
  return Object.keys(obj)
    .filter(key => key.indexOf('.') > -1)
    .reduce(function (obj, key) {
      var keyValue = obj[key]
      setPathValue(obj, key, keyValue)
      delete obj[key]
      return obj
    }, obj)
}
