import React from 'react'
import WhatReactCanRender from './WhatReactCanRender'
import Iterating from './Iterating'
import DisplayName from './DisplayName'
import ConditionalRender from './ConditionalRender'


const people = [
  { name: 'Ala', lastName: 'Kotowicz'},
  { name: 'Ala', lastName: '2'},
  { name: 'Ala', lastName: '3'},
]


const App = () => {
  return <div>
    <ConditionalRender display={true} />
    <ConditionalRender display={false} />
    <ConditionalRender />
    <hr/>
    {
      people.map(person => (
        <DisplayName
          key={person.name+person.lastName}
          name = {person.name}
          lastName = {person.lastName}
        />
      ))
    }
    
    <hr />
    <Iterating />
    <hr />
    <WhatReactCanRender />
  </div>
}

export default App