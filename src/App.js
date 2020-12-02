import React,{Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso'


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
        <Curso />
        <Curso />
        <Curso />
    </div>
    </>
)

export default App;
