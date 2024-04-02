import React from 'react'
import SocialMedia from './SocialMedia'
function Contact() {
    return (
        <section id='contactSection' className='container'>
            <div className="section">
                <h1 className="yellow">Contact</h1>
                <div style={{ margin: '4em' }}>
                    <h1>
                        Do you have any projects? <span className='yellow'>Let's talk</span>
                    </h1>
                </div >
                <div className='mt-4 text-start'>
                    <h3>
                        <div className="row">
                            <div className="col-3 yellow">
                                Email :
                            </div>
                            <div className="col-3">
                                muhammadasad98980@gmail.com
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 yellow">
                                Phone Number :
                            </div>
                            <div className="col-3">
                                +92-312-2492189
                            </div>
                        </div>
                    </h3>
                    <div className="text-start socialMedia">
                        <h3 className='yellow'>Social Media:</h3>
                        <div className="d-flex" style={{ fontSize: '30px' }}>
                            <SocialMedia socialMediaPage='Facebook' link='https://www.facebook.com/asadfurqan2723' />
                            <SocialMedia socialMediaPage='Instagram' link='https://www.instagram.com/asadfurqan18' />
                            <SocialMedia socialMediaPage='Linkedin' link='https://www.linkedin.com/in/asad-m-furqan' />
                            <SocialMedia socialMediaPage='Github' link='https://www.github.com/MAsad2723' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact