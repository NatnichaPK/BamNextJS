"use client";

import React, { useEffect, useState } from "react";
import './pokemonDetail.css';

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  base_experience: number;
  abilities: ability[];
  types: type[];
  stats: stat[];
}

interface stat{
  base_stat: number;
  effort: number;
  stat:{
    name: string;
    url: string;
  }
}

interface type{
  slot: number;
  type:{
    name: string;
    url: string;
  }
}

interface ability{
  ability: {
    name: string;
    url:string;
  },
  is_hidden: boolean;
  slot: number;
}

function State(state: stat){
  return (
    <>
      <span>{state.stat.name}</span> : <span>{state.base_stat}</span><br/>
    </>
  )
}

export default function PokemonDetailPage({params}: any) {
  const {name} = params;
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()).then(data => {
        console.log(data);
        const pokemon = data as PokemonDetail;
        setPokemon(pokemon);
        setLoading(false);
      });
    } catch (error) {
      console.error("Failed to fetch Pokemon data:", error);
      setLoading(false);
    }
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!pokemon) return <h1>Pokemon not found</h1>;

  return (
    <div className="container"> 
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: '256px', height: 'auto'}} />
      <div className="d-flex justify-content-start">
        <ul>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          <li>Base experience: {pokemon.base_experience}</li>
          <li>Ability: {pokemon.abilities.map(x=>x.ability.name).join(', ')}</li>
          <li>Type: {pokemon.types.map(y=>y.type.name).join(', ')}</li>
        </ul>
        <ul>
          <li>Stat: <br/> <div style={{paddingLeft: '15px'}}>{pokemon.stats.map(x=>State(x))}</div></li>
        </ul>
      </div>
    </div>
  );
}
