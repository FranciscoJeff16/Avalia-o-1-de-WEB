import React from "react";
import { useState } from "react";

const Calculadora = () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const somar = () => {
        setResultado(parseInt(valor1) + parseInt(valor2));
    }

    const subtrair = () => {
        setResultado(parseInt(valor1) - parseInt(valor2));
    }

    const multiplicar = () => {
        setResultado(parseInt(valor1) * parseInt(valor2));
    }

    const dividir = () => {
        setResultado(parseInt(valor1) / parseInt(valor2));
    }
    const limpar = () => {
        setValor1(0);
        setValor2(0);
        setResultado(0);
    }

    return (
        <div>
            <h1>Questão 2</h1>
            <h2>Calculadora</h2>
            <input class="input-group-append" type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            <br></br>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
            <button onClick={multiplicar}>×</button>
            <button onClick={dividir}>÷</button>
            <button onClick={limpar}>Limpar</button>
            <h1>Resultado: {resultado}</h1>
        </div>
    );
}

export default Calculadora;