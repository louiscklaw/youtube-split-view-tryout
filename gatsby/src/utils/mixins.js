const helloworldMixins = () => {
  console.log("hello mixins")
}

const checkContextReady = context_in => {
  return typeof context_in !== "undefined"
}

const checkDataReady = obj_in => {
  return typeof obj_in != "undefined" && obj_in != null
}

const checkIsNotNull = obj_in => {
  return obj_in != null
}

const checkIsNotUndefined = obj_in => {
  // console.log("calling check is not Undefined")
  return typeof obj_in !== "undefined"
}

const trueIfUndefinedOrNull = obj_in => {
  return checkIsNotNull(obj_in) || checkIsNotUndefined(obj_in)
}

const dictKeyExist = (d_in, key_wanted) => {
  return Object.keys(d_in).indexOf(key_wanted) > -1
}

const combineStyle = in_style => {
  return in_style.join(" ")
}

const isDefined = obj_in =>{
  return typeof obj_in !== "undefined"
}

const getKeys = (o) => Object.keys(o)

const funcPlaceholder = () => {}

const checkKeyExist = (o,k) =>{
  return Object.keys(o).indexOf(k) > -1
}


const filterOutUndefinedFromJson = (json_in) =>{
  // FIXME: this is an lazy method to filter out undefined in complex dict tree
  return JSON.parse(JSON.stringify(json_in))
}


export {
  checkContextReady,
  checkIsNotNull,
  checkIsNotUndefined,
  combineStyle,
  dictKeyExist,
  helloworldMixins,
  trueIfUndefinedOrNull,
  checkDataReady,
  isDefined,
  getKeys,
  funcPlaceholder,
  checkKeyExist
}
