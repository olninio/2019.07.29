import React from 'react'
import WhatReactCanRender from './WhatReactCanRender'
import Iterating from './Iterating'
import DisplayName from './DisplayName'

const App = () => {
  return <div>
    <DisplayName />
    <br />
    <Iterating />
    <hr />
    <WhatReactCanRender />
  </div>
}

export default App