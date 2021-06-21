export function submitValidator(count) {
  if (typeof count === 'string' || isNaN(count)) {
    throw Error(`
        Count should have been a number.
        Got: ${count}
    `)
  }
  return true
}
