var recipes = {1: 'flour'}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function deleteFromObjectByKey(object, key) {
  var 2 = Object.assign({}, object)
  delete object[key]
  return 2
}