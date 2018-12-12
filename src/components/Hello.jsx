import React from 'react'
import './Hello.css'

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement, x }) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel) + '  ||  ' + x}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

export default Hello

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
