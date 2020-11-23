const superHeroes = require("./super-heroes.json");

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvelGroup = [];
  for (let i = 0; i < superHeroes.length; i++) {
    if (heroes[i].publisher == "Marvel") {
      marvelGroup.push(heroes[i].characters);
    }
  }
  return heroes;
};

getDCHeroes(superHeroes);
/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  heroes.map((hero) => {
    hero.characters.split(",");
  });
  return heroes;
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let dcGroup = [];
  let marvelGroup = [];
  for (let i = 0; i < superHeroes.length; i++) {
    if (heroes[i].publisher == "DC Comics") {
      dcGroup.push(heroes[i].superhero);
    } else if (heroes[i].publisher == "Marvel") {
      marvelGroup.push(heroes[i].superhero);
    }
  }
  return heroes;
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes;
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};
