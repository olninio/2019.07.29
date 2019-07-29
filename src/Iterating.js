import React from 'react'

console.log([
  <p>Ala</p>,
  <p>Ola</p>,
  <p>Ela</p>,
])

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNumbers = numbers.filter(number => number % 2 === 0)

const names = ['Ala', 'Ola', 'Ela']

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
    <br />
    {
      names.map(name => React.createElement('p', {key:name}, name))
    }
    {
      names.map(name => <p key={name}>{name}</p>)
    }
    <br />
    <ul>
      {
        names.map(name => <li key={name}>{name}</li>)
      }
    </ul>
  </div>
)

export default Iterating