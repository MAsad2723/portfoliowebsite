import React from 'react'
import Image from './Image'
function Home() {
    return (
        <section className='container home' id='homeSection'>
            <div className="row d-flex align-items-center container" style={{ margin: 'auto' }}>
                <div className="col-lg-8 col-md-8 col-sm-12 container-fluid text-start">
                    <div>
                        <h1>
                            HELLO, I'm <span className='yellow'>Asad M. Furqan</span>
                        </h1>
                    </div>
                    <div>
                        <p className='paragraph'>A passionate software engineer crafting awesome digital experiences. From designing beautiful websites to building strong backend systems, I'm here to make your online dreams a reality! Let's create something amazing together!</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 d-none d-md-block'>
                    <Image width={'500px'} />
                </div>
            </div>
        </section>
    )
}

export default Home