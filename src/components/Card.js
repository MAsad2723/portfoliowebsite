import React from 'react'

function Card(prop) {
    return (
        // <a href="#sectionProject" target='_blank' rel="noopener noreferrer" className='card m-4 col-3 cardBox'>
        <div className='card m-4 col-3 cardBox'>
            <a href={prop.link} rel="noopener noreferrer" target='_blank'>
                <div className='cardImage'>
                    <img src={prop.img} style={{ height: 'inherit' }} className="card-img-top" alt="..." />
                </div>
                <div className="cardText">
                    <h5 className="textHeading">{prop.heading}</h5>
                    <p className="textDesc text-start" style={{ fontSize: '15px' }}>{prop.desc}</p>
                </div>
            </a>
        </div>

    )
}

export default Card