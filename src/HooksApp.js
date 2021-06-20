import React, { useState } from 'react'

export const HooksApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  //DESTRUCUTURACIÓN
  const { counter1, counter2 } = state

  return (
    <div>

      <h4>Numeros</h4>

      <h5> {counter1} </h5>
      <h5> {counter2} </h5>

      <br />
      <button
        className="btn btn-primary"
        onClick={() => setState({
          ...state,
          counter1: counter1 + 1
        })
        }
      > + 1</button>

    </div>
  )
}
