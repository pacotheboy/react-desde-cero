import React from 'react';
import Curso from './Curso';


const cursos = [
    {
        "id" : 1,
        "titulo" : "React desde cero",
        "image"  : "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price"  : 40,
        "profesor" : "Beto quiroga"
    },
    {
        "id" : 2,
        "titulo" : "Drupal desde cero",
        "image"  : "https://edteam-media.s3.amazonaws.com/courses/small/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
        "price"  : 30,
        "profesor" : "Beto quiroga"
    },
    {
        "id" : 3,
        "titulo" : "Go desde cero",
        "image"  : "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
        "price"  : 50,
        "profesor" : "Alexys lozada"
    },
    {
        "id" : 4,
        "titulo" : "Html desde cero",
        "image"  : "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
        "price"  : 10,
        "profesor" : "Alvaro Felipe"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            cursos.map( c => 
            <Curso 
             key={c.id} 
             id = {c.id}
             title = {c.title}
             image = {c.image}
             profesor = {c.profesor}
              /> )
        }
    </div>
)

export default CourseGrid;