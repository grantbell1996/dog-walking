import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    //iterate through the list of walkers to find the walker of each pet
    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    //this function will return the new value of petwalker
    return petWalker
}


export const Assignments = () => {
    //specify assignment will be a string
    let assignmentHTML = ""
    //specify assignment will be an unordered list
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        //invoke the findWalker function inside the for of loop before using string interpolation 
        const currentPetWalker = findWalker(currentPet, walkers)
        //use the += method to add each line of string interpolation as a bullet in the assignmentHTML ul
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    //return the entire assignment unorderd list
    return assignmentHTML
}

