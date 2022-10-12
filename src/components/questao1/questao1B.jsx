import React from "react";

const Questao1B = () => {
    let disciplinas = ["Programação de Software para Web", "Avaliação de IHC", "Proecesso de Software", "Análise e Projeto de Software"];
  return (
    <div>
          <h1>Disciplinas</h1>
          <ul>
              {disciplinas.map((disciplina) => (
                  <li key={disciplina.toString()}>{disciplina}</li>
              ))}
          </ul>
          
    </div>
  );
};  

export default Questao1B;