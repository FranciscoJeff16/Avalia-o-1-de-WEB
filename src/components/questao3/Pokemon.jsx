import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [contaPokemon, setContaPokemon] = useState(10);


    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${contaPokemon}&limit=10`)
            .then((response) => {
                setPokemon(response.data.results);
        })
            .catch((error) => {
            console.log(error);
            });
    }, [contaPokemon]);
    
    return (
        <div>
            <h1>Questão 3</h1>
            <h2>Pokemons</h2>
            <button class="btn btn-primary" onClick={() => { setContaPokemon(contaPokemon + 10) }}>Listar</button>
                <ul>
                    {pokemon.map((pokemon) => (
                        <ul key={pokemon.name}>{pokemon.name}</ul>
                    ))}
                </ul>
        </div>
    );

}

export default Pokemon;