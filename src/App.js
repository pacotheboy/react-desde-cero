import React,{Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso'


const cursos = [
    {
        "title" : "React Desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/big/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price" : 40,
        "profesor" : "Beto Quiroga"
    },
    {
        "title" : "Drupal Desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/big/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
        "price" : 30,
        "profesor" : "Beto Quiroga"
    },
    {
        "title" : "Go Desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/big/bd8b449c-d796-440e-9b2d-d9c7cbd79862.png",
        "price" : 50,
        "profesor" : "Alexys Lozada"
    },
    {
        "title" : "Html Desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png",
        "price" : 10,
        "profesor" : "Alvaro Felipe"
    }
]

const App = () => (
    <>
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Cursos de EDteam</p>
                    <p>Tu futuro te esta esperando</p>
                    <a href="https://ed.team" className="button">Suscribirse</a>
                </div>
            </div>
        </div>
    </div>
    <div className="ed-grid m-grid-3">
        {
            cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
        }
    </div>
    </>
)

export default App;
