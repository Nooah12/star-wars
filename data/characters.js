function Character(name, role, weapon) {
    this.name = name,
    this.role = role,
    this.weapon = weapon
}

const luke = new Character('Luke Skywalker', 'farm boy', 'green lightsaber'); 
const obi = new Character('Obi-Wan Kenobi', 'Jedi counsil member', 'blue lightsaber');

// export this array with the values to jedi.js
export const jediKnights = [luke, obi];

export const sithLords = [
    new Character('Darth Vader', 'absent father', 'red lightsabre'),
    new Character('Palpatine', 'Emperor', 'lightning')
]