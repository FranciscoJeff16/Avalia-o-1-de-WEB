import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Paises = () => {
    const [paises, setPaises] = useState([]);
    const [continente, setContinente] = useState("Africa");
    
    useEffect(() => {
        axios
            .get(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
            .then((response) => {
                setPaises(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [continente]);

    const maisPopuloso = () => {
        let maiorPopulacao = 0;
        let paisMaisPopuloso = "";
        paises.forEach((paises) => {
            if (paises.population > maiorPopulacao) {
                maiorPopulacao = paises.population;
                paisMaisPopuloso = paises.name;
            }
        });
        return paisMaisPopuloso;
    };

    const menosPopuloso = () => {
        let menorPopulacao = paises[0].population;
        let paisMenosPopuloso = "";
        paises.forEach((paises) => {
            if (paises.population < menorPopulacao) {
                menorPopulacao = paises.population;
                paisMenosPopuloso = paises.name;
            }
        });
        return paisMenosPopuloso;
    };
        


    return (
        <div>
            <h1>Questões 4 e 5</h1>
            <h2>Países</h2>
            O país com maior população ou com menor população também vai aparecer em formato de alert.
            <br></br>
            <br></br>

            <button class="btn btn-primary" onClick={() => { setContinente("Africa"); alert("O pais mais populoso é:" + " " + maisPopuloso()) }}>Africa</button> 
            <button class="btn btn-primary" onClick={() => { setContinente("Americas"); alert("O pais mais populoso é:" + " " + maisPopuloso()) }}>America</button>
            <button class="btn btn-primary" onClick={() => { setContinente("Asia");  alert("O pais menos populoso é:" + " " + menosPopuloso())}}>Asia</button>
            <br></br>
            <br></br>

            <ul>
                <h3> O país mais populoso do continente da {continente} é {maisPopuloso()}</h3>
                <h3> O país menos populoso do continente da {continente} é {menosPopuloso()}</h3>
                Lista de países e população do continente {continente}.:
            <br></br>
                    {paises.map((paises) => (
                        <ul key={paises.name}>{paises.name} - {paises.population}</ul>
                    ))}
                </ul>
        </div>
    );
}


export default Paises;