export const setPathValue = (layer, path, value) => {
  const splitPath = path.split('.')
  return splitPath
    .reduce((layer, pathSection, i) => {
      // if last section
      if (i + 1 === splitPath.length) {
        layer[pathSection] = value
      }

      layer = layer[pathSection] = layer[pathSection] || {}
      return layer
    }, layer)
}

// expands keys with .'s to nested objects
export const expandKeys = (obj) => {
  return Object.keys(obj)
    .filter(key => key.indexOf('.') > -1)
    .reduce(function (obj, key) {
      const keyValue = obj[key]
      setPathValue(obj, key, keyValue)
      delete obj[key]
      return obj
    }, obj)
}
