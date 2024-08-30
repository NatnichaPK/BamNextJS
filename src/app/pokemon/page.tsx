"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = useState<PokemonList>(
    {} as PokemonList
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data: PokemonList = await res.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };

    getData();
  }, []);

  const DisplayPokemonList = () => {
    if (pokemonData && pokemonData.results) {
      return (
        <ul>
          {pokemonData.results.map((p, index) => (
            <li key={index}>
              <Link href={`/pokemon/${index + 1}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <h1>Pokemon Name</h1>
      <DisplayPokemonList />
    </>
  );
}
