const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

// Get a random number out of [10, 11, 12, 13]
console.log(random(10, 14))

// Get a random number from 1 to 100 (inclusive)
console.log(random(1, 101))

// Get a random number from -10 to 10 (inclusive)
console.log(random(-10, 11))
