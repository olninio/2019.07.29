import React from 'react'

const styles = {
  div:  { color: 'red', backgroundColor: 'green' }
}

const DisplayName = (props) => (
  <div style={styles.div}>
    {props.name}
  </div>
)

export default DisplayName