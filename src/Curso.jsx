import React from 'react'
import PropTypes from 'prop-types'




const Curso = ({title, image, price, profesor}) => (
    <article className="card "> 
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center" >{title}</h3>   
            <div className="s-main-center">
                {profesor}
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://edteam.com">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.number,
    profesor : PropTypes.string
}

Curso.defaultProps = {
    title : "No se encontro titulo",
    image : "https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg",
    price : "--",
    profesro : "Isac Newtoon"
}

export default Curso;