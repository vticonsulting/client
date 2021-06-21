const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

console.log(range(5))
console.log(range(5, 10))
console.log(range(0, 10, 2))
console.log(range(0, 5, 0.5))
