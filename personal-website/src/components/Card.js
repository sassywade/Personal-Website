import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        <div className="g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image g-carousel-container" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;