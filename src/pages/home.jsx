import React from 'react';
import Search from '../components/Search';
import { fetchPokemon, fetchAbility } from '../services/getPokemon';
import PokemonData from '../components/PokemonData';
import { Spinner, Alert } from 'react-bootstrap';

const spinnerStyle = {
  width: '10rem',
  height: '10rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

export default function HomePage() {
  
  const [pokemon, setPokemon] = React.useState();
  const [ability, setAbility] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('Ingresar nombre de pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon no encontrado.');
      }
    }, 1500);
  }

  const getAbility = async (query) => {
    if (!query) {
      setErrorMsg('Ingresar nombre de pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
        const responseAbout = await fetchAbility(query);
        const resultsAbout = await responseAbout.json();
        console.log(resultsAbout);
        setAbility(resultsAbout);
        setLoading(false);
    }, 1500);
  }

  return (
    <div>
      {error ? (<Alert variant='danger'>{errorMsg}</Alert>): null} 
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          id={pokemon.id}
          name={pokemon.name}
          sprite={pokemon.sprites.other.dream_world.front_default}
         // abilities={ability.effect_entries.effect}
          stats={pokemon.stats}
          types={pokemon.types} />
      ): null}
    </div>
  )
}