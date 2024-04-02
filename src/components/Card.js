import React from 'react'

function Card(prop) {
    return (
        // <a href="#sectionProject" target='_blank' rel="noopener noreferrer" className='card m-4 col-3 cardBox'>
        <a href="#sectionProject" rel="noopener noreferrer" className='card m-4 col-3 cardBox'>
            <div>
                <div>
                    <img src={prop.img} style={{ height: 'inherit' }} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{prop.heading}</h5>
                    <p className="card-text text-start">{prop.desc}</p>
                </div>
            </div >
        </a>
    )
}

export default Card