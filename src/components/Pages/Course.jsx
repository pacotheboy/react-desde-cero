import React from 'react'

const courses = {}

const Course = ({match}) =>{

    const CursoActual = courses.filter( c => c.id === parseInt(match.params.id))[0];
    
    console.log(CursoActual);
    return (
        <div className="ed-grid m-grid-3">
        {
            CursoActual ? (
                <>
                <h1 className="m-cols-3"> {CursoActual.titulo}</h1>
                <img className="m-cols-1" src={CursoActual.image} alt={CursoActual.titulo} />
                <p className="m-cols-2">Profesor: {CursoActual.profesor}</p>
                </>
            ) : 
                <h1>No se encontro el curso que buscas</h1>
        }
        </div>
         
    )
}

export default Course;