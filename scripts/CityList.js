import { getCities } from "./database.js"

const cities = getCities()

//this function that will put the cities names under an ordered list
export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

