import React, { useEffect, useState } from "react";

export default props => {
  const [contador, setContador] = useState(100)
  const [parOuImpar, setParOUImpar] = useState('Par')

  useEffect(() => {
    contador % 2 === 0 ? setParOUImpar('Par') : setParOUImpar('Ímpar')
  })

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{parOuImpar}</h3>
      <button onClick={() => setContador(contador + 1 )}>Inc</button>
      <button onClick={() => setContador(contador - 1 )}>Dec</button>
    </div>
  )
}