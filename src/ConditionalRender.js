import React from 'react'
const ConditionalRender = (props) => (
  props.display === true ?
  <div>
    ConditionalRender
  </div>
  :
  null
)

export default ConditionalRender