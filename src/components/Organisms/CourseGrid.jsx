import React from 'react';
import withLoader from '../HOC/withLoader';
import CourseCard from '../Molecules/CourseCard';

const CourseGrid = ({ cursito }) =>(
            <div className="ed-grid m-grid-4">
                {
                    cursito.map( c => 
                        <CourseCard 
                        key={c.id} 
                        id = {c.id}
                        title = {c.titulo}
                        image = {c.image}
                        professor = {c.professor}
                        /> )
                }

            </div>
)

export default withLoader( "cursito", CourseGrid) 