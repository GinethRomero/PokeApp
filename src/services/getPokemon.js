const baseUrl = 'http://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon',
  ability: 'ability'
}

export async function fetchPokemon(pokemon) {
  console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
}

export async function fetchAbility(ability) {
  console.log(`${baseUrl}/${query.ability}/${ability}`);
  return fetch(`${baseUrl}/${query.ability}/${'pokemon.id'}`)
}


