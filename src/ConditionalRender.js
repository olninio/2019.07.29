import React from 'react'
import PropTypes from 'prop-types'

const ConditionalRender = (props) => (
  props.display === true ?
  <div>
    ConditionalRender
  </div>
  :
  null
)

ConditionalRender.propTypes = {
  display: PropTypes.bool
}

export default ConditionalRender