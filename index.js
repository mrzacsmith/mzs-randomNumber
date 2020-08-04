const randomNumGenerator = (min, max, int = false) => {
  if (typeof max !== 'number' && typeof min !== 'number') {
    min = 0
    max = 1
  }
  if (int === true) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  return Math.random() * (max - min) + min
}

module.exports = randomNumGenerator
