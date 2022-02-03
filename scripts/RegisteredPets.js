import { getPets } from "./database.js"

//getPets is a function that copys the array of pets from the database
const pets = getPets()

export const registeredPets = () => {
    //this line is telling you that "petHTML" will be printed as a bullet point list
    let petHTML = "<ul>"

    for (const pet of pets) {
        //as you itterate through pets, "+=" will add the pets name to the ul
        petHTML += `<li>${pet.name}</li>`
    }

    //always add a closing ul bracket
    petHTML += "</ul>"

    //return entire registered pet ul
    return petHTML
}

