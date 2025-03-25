import React from 'react'

function EachExample(props) {
  return (
    <div id="tab-content">
      <h3>{props.details.title}</h3>
        <div>
            <p>{props.details.description}</p>
            <pre>
            <code>{props.details.code}</code>
            </pre>
        </div>
    </div>
  )
}


export default EachExample
