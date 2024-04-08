import React from 'react'
import ProfilePicture from '../static/linkedinProfile.png'
function Image(props) {
    return (
        <div className="col-5" >
            <img src={ProfilePicture} alt="" width={props.width} />
        </div>
    )
}

export default Image