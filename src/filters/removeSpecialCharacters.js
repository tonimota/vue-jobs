export const removeCharacts = (value) => {
  let text = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  return text
}
