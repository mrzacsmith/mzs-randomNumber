## Random Number Generator

This package will return a random number from the min to < max.

The function takes 3 parameters:

- first parameter: minimum number you want the value to return
- second parameter: maximum number in range, if you want 1 - 10 and wish to have the possible of 10, you would use (1, 11).
- third parameter: is default to int=false, therefore it will return a decimal. If you want an integer, add the 3 parameter of true.

### Instructions

- `npm i mzs-randomnumber`
- `const randomNumGenerator = require('mzs-randomnumber')`
- `randomNumGenerator(minNumber, maxNumber)` Returns a decimal
- `randomNumGenerator(minNumber, maxNumber, true)` Returns an integer
