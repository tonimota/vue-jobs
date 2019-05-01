export const limitTo = (value, max) => {
  let txt = value.length > max ? value.substring(0, max) + '...' : value
  return txt
}
