type PokemonType =
  | "Grass"
  | "Poison"
  | "Fire"
  | "Flying"
  | "Water"
  | "Bug"
  | "Normal"
  | "Electric"
  | "Ground"
  | "Fairy"
  | "Fighting"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Ice"
  | "Ghost"
  | "Dragon"
  | "Dark";

type Pokemon = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  types: Array<PokemonType>;
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

// source array
const pokemons: Array<Pokemon> = require("../datasets/pokemon.json");

// === Array methods
// = filter
// Array method that creates a new array with ONLY the elements of the source array
// that pass the provided test
function attackIsMoreThan60(element: Pokemon): boolean {
  return element.base.Attack > 60;
}

// Normal functions syntax (old syntax)
// Option 1: By reference (RECOMMENDED)
pokemons.filter(attackIsMoreThan60);
// Option 2: Inline (with name) (NOT RECOMMENDED)
pokemons.filter(function attackIsMoreThan60(element: Pokemon): boolean {
  return element.base.Attack > 60;
});
// Option 3: Inline (anonymous) (RECOMMENDED)
pokemons.filter(function (element: Pokemon): boolean {
  return element.base.Attack > 60;
});

// Arrow function syntax
const attackIsMoreThan50 = (element: Pokemon, index: number): boolean => {
  return element.base.Attack > 50;
};

// Option 1: By reference
pokemons.filter(attackIsMoreThan50);
// Option 2: Inline
pokemons.filter((element: Pokemon, index: number): boolean => {
  return element.base.Attack > 50;
});
// Option 3: Inline with no parentheses
// This can ONLY be done when you ONLY use 1 argument
// YOU CAN'T WRITE THE TYPE OF THE ARGUMENT OR THE RETURN TYPE
pokemons.filter((element) => {
  return element.base.Attack > 50;
});
// Option 4: Inline with no block or return statement
pokemons.filter((element) => element.base.Attack > 50);

// Pass it by reference
pokemons.filter(attackIsMoreThan60);
// Pass it inline
pokemons.filter(function attackIsMoreThan60(element: Pokemon): boolean {
  return element.base.Attack > 60;
});
pokemons.filter(function (element: Pokemon): boolean {
  return element.base.Attack > 60;
});
// ====

type FilterFn = (element: Pokemon, index: number) => boolean;

function filter(
  pokemons: Array<Pokemon>,
  callbackFn: (element: Pokemon, index: number, array: Array<Pokemon>) => boolean
): Array<Pokemon> {
  const filteredPokemons: Array<Pokemon> = [];
  for (let i = 0; i < pokemons.length; i++) {
    const currentPokemon = pokemons[i];
    const shouldBeAdded = callbackFn(currentPokemon, i, pokemons);
    if (shouldBeAdded) {
      filteredPokemons.push(pokemons[i]);
    }
  }
  return filteredPokemons;
}

const attacks = pokemons.map((element: Pokemon) => {
  return element.base.Attack;
});
//whats going on inside of function
function map(
  pokemons: Array<Pokemon>,
  callbackFn: (element: Pokemon, index: number, array: Array<Pokemon>) => unknown
): Array<unknown> {
  const result: Array<unknown> = [];
  for (let i = 0; i < pokemons.length; i++) {
    const currentPokemon = pokemons[i];
    const resultForCurrentPokemon = callbackFn(currentPokemon, i, pokemons);
    result.push(resultForCurrentPokemon);
  }
  return result;
}

// Don't touch this
describe("scope", () => {});

export {};
