import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);

// Get the first animal whose species is "fish"
export const query2 = await Animal.findAll({
    where: { species: 'fish' }
});

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({
    where: { human_id: 5 }
});

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: { birth_year: { [Op.gt]: 2015 } }
});

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: { fname: { [Op.startsWith]: 'J%' } }
});

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: { birth_year: null }
});

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: { species: { [Op.or]: ['fish', 'rabbit'] } }
});

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: { email: { [Op.notLike]: '%gmail%' } }
});

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const people = await Human.findAll();
    const animals = await Animal.findAll();
    const solutionArr = people.map((person) => {
        const guy = `${person.fname} ${person.lname}`;
        let pets = ``;
        animals.forEach((animal) => {
            if (animal.human_id === person.human_id) {
                pets = pets + `${animal.name} the ${animal.species}, `;
            };
        });
        const newPets = pets.slice(0, -2);
        return `${guy}'s pets are: ${newPets}.`;
    });

    let solutionIsh = ``;
    solutionArr.map((personAndPets) => {
        solutionIsh = solutionIsh + `${personAndPets} `
    });
    const solution = solutionIsh.slice(0, -1);

    return solution;
};

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const animals = await Animal.findAll({
        where: { species: species }
    });
    const people = await Human.findAll({
        where: {  }
    });

    return animals;
};

console.log((await printHumansAndAnimals()));