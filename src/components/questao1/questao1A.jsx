import React from "react";

const Questao1A = (props) => {
  return (
    <div>
      <h1>Dados do Discente </h1>
      
          <h3> Nome: {props.nome} </h3>
          <h3> Sobrenome: {props.sobrenome} </h3>
          <h4> Curso: {props.curso} </h4>
    </div>
  );
};  

export default Questao1A;