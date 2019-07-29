import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () =>  <h1>Hello</h1>
const hello = <h1>Hello</h1>

console.log(Hello)
console.log(hello)
console.log(Hello())
console.log(<Hello />)

ReactDOM.render(
  <Hello />,
  document.querySelector('#root')
)