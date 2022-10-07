import asignatures from "./asignatures.js";
import pkg from 'colors';
// asignatures.forEach((course)=>{
//     if (course.type === "technical") {
//         console.log(`Materia: ${course.name}`.rainbow);
//         console.log(`Profesor: ${course.instructor}`.green);
//     }
// });
// console.log(`Potencia: ${potence(2, 2)}`)

const instructors = [];

asignatures.map((asignature)=>{
    instructors.push(asignature.instructor);    
});

const course = (id) => {
    // asignatures.findIndex((asign) => asign.id === 1)
    asignatures.findIndex((asign) => asign.id == id)
}

asignatures.splice(course.id, 1)

console.log(asignatures)