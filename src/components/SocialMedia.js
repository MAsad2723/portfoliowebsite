import React from 'react'

function SocialMedia(props) {
    return (
        <a className="container socialMediaBoxes " target='_blank' rel="noopener noreferrer" href={props.link}>
            <div className={`${props.socialMediaPage.toLowerCase()}Logo`}>
                <i class={`bi bi-${props.socialMediaPage.toLowerCase()}`}></i>
            </div>
            <div className='mx-4'>
                <p>
                    {props.socialMediaPage}
                </p>
            </div>
        </a>
    )
}

export default SocialMedia