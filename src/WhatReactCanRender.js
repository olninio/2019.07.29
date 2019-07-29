import React from 'react'

const number = 12
const string = 'cokolwiek'
const bool = true
const nullVar = null
const undef = undefined

const obj1 = {}
const obj2 = { name: 'Mateusz' }

const arr1 = []
const numbers = [1, 2, 3]
const names = ['Ala', 'Ola', 'Ela']
const objects = [
  { name: 'Ala' },
  { name: 'Ela' },
  { name: 'Ola' }
]

const hello = () => 'Hello'

const WhatReactCanRender = () => (
  <div>
    <p>Can render numbers:</p>
    {number}
    <p>Can render strings:</p>
    {string}
    <p>CANT render bool (without error - renders nothing):</p>
    {bool}
    <p>CANT render null (without error - renders nothing):</p>
    {nullVar}
    <p>CANT render unndefined (without error - renders nothing):</p>
    {undef}
  </div>
)

export default WhatReactCanRender