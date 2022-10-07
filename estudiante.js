let colors = require('colors');

const student = {
    "id": "54",
    "name": "John",
    "lastname": "Gualteros",
    "identification_document": 1031802432
};

const students = [
    "Laura",
    "Carlos",
    "Jaime"
];
let [l, c, j] = students;

const {id, name, lastname, identification_document} = student;
console.log(`id: ${id}\nname: ${name}\nlastname: ${lastname}\nidentification Number: ${identification_document}`.rainbow);