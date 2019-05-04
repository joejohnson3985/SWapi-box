export const getCurrentCategoryData = (category) => {
  const url = `https://swapi.co/api/${category}`
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Error lmao')
      }
      return response.json()
    })
} 

export const getHomeworld = (people) => {
  const homeworlds = people.map(person => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(results => {
        const newPerson = {...person, homeworld: results.name, population: results.population}
        return newPerson
      })
  })
  return Promise.all(homeworlds)
}

export const getSpecies = (people) => {
  const species = people.map(person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(results => {
        const newPerson = {...person, species: results.name}
        return newPerson
      })
  })
  return Promise.all(species)
}

export const getPlanets = (planets) => {
  const finalPlanets = planets.map(planet => {
    return getResidents(planet)
    .then(residents => ({...planet, residents}))
  })
  return Promise.all(finalPlanets) 
}

const getResidents = (planet) => {
  const residentNames = planet.residents.map(resident => {
    return fetch(resident)
    .then(response => response.json())
    .then(result => result.name)
  })
  return Promise.all(residentNames)
}