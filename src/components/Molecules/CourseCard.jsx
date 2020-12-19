import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';




const CourseCard = ({id, title, image, price, professor}) => (
    <article className="card "> 
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}><img src={image} alt={title} /></Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center" >{title}</h3>   
            <div className="s-main-center">
                {professor}
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://edteam.com">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

CourseCard.propTypes = {
    title : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.number,
    profesor : PropTypes.string
}

CourseCard.defaultProps = {
    title : "No se encontro titulo",
    image : "https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg",
    price : 0,
    profesro : "Isac Newtoon"
}

export default CourseCard;