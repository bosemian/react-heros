import heros from '../../../heros'

const findHero = (id) => {
  const hero = heros.find((hero) => +id === hero.id)
  
  return hero 
}

export default {
  findHero
}
