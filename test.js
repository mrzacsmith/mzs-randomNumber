const randomNumGenerator = require('./index.js')

// Should return a decimal in range of 1 to < 10
console.log(randomNumGenerator(1, 10))

// Should return an int in range of 1 to 10 using true paramater
console.log(randomNumGenerator(1, 10, true))
