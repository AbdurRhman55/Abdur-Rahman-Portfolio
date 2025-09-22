import React from 'react'

function Button(prop) {
  return (
    <div>
        <button className={prop.className} >
            {prop.contant}
        </button>
    </div>
  )
}

export default Button
