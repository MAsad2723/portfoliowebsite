import React from 'react'

function Card(prop) {
    return (
        <div className="card m-4 col-3 cardBox">
            <div>
                <img src={prop.img} style={{ height: 'inherit' }} className="card-img-top" alt="..." />
            </div>
            <div className="card-body d-flex flex-column justify-content-end">
                <h5 className="card-title">{prop.heading}</h5>
                <p className="card-text text-start">{prop.desc}</p>
            </div>
        </div >
    )
}

export default Card