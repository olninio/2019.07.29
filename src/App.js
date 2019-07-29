import React from 'react'
import WhatReactCanRender from './WhatReactCanRender'
import Iterating from './Iterating'
import DisplayName from './DisplayName'


const people = [
  { name: 'Ala', lastName: 'Kotowicz'},
  { name: 'Ala', lastName: '2'},
  { name: 'Ala', lastName: '3'},
]


const App = () => {
  return <div>
    {
      people.map(person => (
        <DisplayName
          key={person.name+person.lastName}
          name = {person.name}
          lastName = {person.lastName}
        />
      ))
    }
    
    <br />
    <Iterating />
    <hr />
    <WhatReactCanRender />
  </div>
}

export default App