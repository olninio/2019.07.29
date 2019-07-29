import React from 'react'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNumbers = numbers.filter(number => number % 2 === 0)

const Iterating = (props) => (
  <div>
    {numbers}
    <br />
    {evenNumbers}
    <br />
    {
      numbers
        .filter(number => number % 2 !== 0)
        .map(number => 2 * number + ' ')
    }
  </div>
)

export default Iterating