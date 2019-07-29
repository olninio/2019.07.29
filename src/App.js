import React from 'react'
import WhatReactCanRender from './WhatReactCanRender'
import Iterating from './Iterating'
import DisplayName from './DisplayName'

const App = () => {
  return <div>
    <DisplayName name={'Ala'} lastName = {'Kotowicz'}/>
    <DisplayName name={'Ola'} lastName = {'Lisiewicz'}/>
    <DisplayName name={'Ela'} lastName = {'Borsukowicz'}/>
    <br />
    <Iterating />
    <hr />
    <WhatReactCanRender />
  </div>
}

export default App