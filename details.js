data = [
    { id: 1, name: 'WALL-E', fullname: 'Waste Allocation Load Lifter Earth-class', movie: 'WALL-E'},
    { id: 2, name: 'EVE', fullname: 'Extraterrestrial Vegetation Evaluator', movie: 'WALL-E'},
    { id: 3, name: 'AUTO', fullname: 'Autopilot', movie: 'WALL-E'},
    { id: 4, name: 'Baymax', fullname: 'Monster Baymax', movie: 'Big Hero 6'},
    { id: 5, name: 'B.E.N', fullname: 'BioElectronic Navigator', movie: 'Treasure Planet'},
    { id: 6, name: 'R2D2', fullname: 'Second Generation Robotic Droid Series-2', movie: 'Star Wars'},
    { id: 7, name: 'C3PO', fullname: 'Commercial Crew & Cargo Program Office', movie: 'Star Wars'},
    { id: 8, name: 'J.A.R.V.I.S', fullname: 'Just A Rather Very Intelligent System', movie: 'Avengers: Age of Ultron'}
];

const list = () => {
    console.log(data)
    return [...data]
};

const find = (id) => {
    const robo = data.find(robo => robo.id === +id);
    return {...robo};
}

module.exports = {list: list, find: find}; 
