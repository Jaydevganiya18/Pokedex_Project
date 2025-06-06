import axios from "axios";
import { useEffect, useState } from "react";
// import usePokemonList from "./usePokemonList";

function usePokemonDetails(id) {
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`);

        // setPokemon({
        //     name: response.data.name,
        //     image: response.data.sprites.other.dream_world.front_default,
        //     weight: response.data.weight,
        //     height: response.data.height,
        //     types: response.data.types.map((t) => t.type.name),
        //     similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 5)
        // });

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
            similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 5)
        });
        setPokemonListState({ ...pokemonListState, type: response.data.types ? response.data.types[0].type.name : '' });
    }

    const [pokemonListState, setPokemonListState] = useState({});

    useEffect(() => {
        downloadPokemon();
    }, []);

    return [pokemon];
}

export default usePokemonDetails;