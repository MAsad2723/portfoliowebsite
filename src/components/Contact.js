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
                    <h4>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 yellow">
                                Email :
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                muhammadasad98980@gmail.com
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 yellow">
                                Phone Number :
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                +92-312-2492189
                            </div>
                        </div>
                    </h4>
                    <div className="text-start socialMedia">
                        <h3 className='yellow'>Social Media:</h3>
                        <div className="d-flex row" style={{ fontSize: '30px' }}>
                            <div className="col-lg-3 col-md-6 col-sm-12" style={{ maxWidth: '80%' }}>
                                <SocialMedia socialMediaPage='Facebook' link='https://www.facebook.com/asadfurqan2723' />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12" style={{ maxWidth: '80%' }}>
                                <SocialMedia socialMediaPage='Instagram' link='https://www.instagram.com/asadfurqan18' />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12" style={{ maxWidth: '80%' }}>
                                <SocialMedia socialMediaPage='Linkedin' link='https://www.linkedin.com/in/asad-m-furqan' />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12" style={{ maxWidth: '80%' }}>
                                <SocialMedia socialMediaPage='Github' link='https://www.github.com/MAsad2723' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact