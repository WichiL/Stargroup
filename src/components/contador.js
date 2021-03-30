import React, { Fragment, useState } from 'react';

const Contador = () => {
    
    const [numero, setNumero] = useState(0);
    
    const aumentar = () => {
        console.log("Diste un click")
        setNumero(numero + 1)
    }

    const [arrayNum, setArrayNum] = useState([1,2,3,5,4])

    const [num, setNum] = useState(5)

    const agregarElemento = () => {
        setNum(num+ 1)
        console.log("Elemento Agregado")
        setArrayNum([
            ...arrayNum,
            num
        ])
    }

    return (  
        <Fragment>
            <h3>Componente Contador {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>

            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNum.map((item, index) =>
                    <p key={index}> {item} - {index}</p>
                )
            }
        </Fragment>
    );
}
 
export default Contador;