data = [
    { id: 1, name: 'WALL-E', fullname: 'Waste Allocation Load Lifter Earth-class', directive: 'waste collection', weapon: 'small trash compactor', movie: 'WALL-E', actor: 'Ben Burtt'},
    { id: 2, name: 'EVE', fullname: 'Extraterrestrial Vegetation Evaluator', directive: 'vegetable reconnaissance', weapon: 'photon cannon', movie: 'WALL-E', actor: 'Elissa Knight'},
    { id: 3, name: 'AUTO', fullname: 'Autopilot', directive: 'Prevent Recolonization', weapon: 'his wheel shaped body', movie: 'WALL-E', actor: 'Macintalk'},
    { id: 4, name: 'Baymax', fullname: 'Monster Baymax', directive: 'personal healthcare companion', weapon: 'large belly', movie: 'Big Hero 6', actor: 'Scott Adsit'},
    { id: 5, name: 'B.E.N', fullname: 'Bio Electronic Navigator', directive: 'space pirate navigator', weapon: 'shipmate telescope', movie: 'Treasure Planet', actor: 'Martin Short'},
    { id: 6, name: 'R2D2', fullname: 'Second Generation Robotic Droid Series-2', directive: 'astro-navigation', weapon: 'mechanic tools', movie: 'Star Wars', actor: 'Ben Burtt'},
    { id: 7, name: 'C3PO', fullname: 'Commercial Crew & Cargo Program Office', directive: 'protocol droid',weapon: 'harsh words', movie: 'Star Wars', actor: 'Anthony Daniels'},
    { id: 8, name: 'J.A.R.V.I.S', fullname: 'Just A Rather Very Intelligent System' ,directive: 'natural language user interface', weapon: 'STARK Inc. Arsenal', movie: 'Avengers: Age of Ultron', actor: 'Paul Bettany'}
];

const list = () => {
    return [...data]
};

const find = (id) => {
    const robo = data.find(robo => robo.id === +id);
    return {...robo};
}

module.exports = {list: list, find: find}; 
