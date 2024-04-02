import React from 'react'
import Image from './Image'
function Home() {
    return (
        <section className='container home' id='homeSection'>
            <div className="row d-flex align-items-center container" style={{ margin: 'auto' }}>
                <div className="col container-fluid text-start">
                    <div>
                        <h1>
                            HELLO, I'm <span className='yellow'>Asad M. Furqan</span>
                        </h1>
                    </div>
                    <div>
                        <p className='paragraph'>A passionate software engineer crafting awesome digital experiences. From designing beautiful websites to building strong backend systems, I'm here to make your online dreams a reality! Let's create something amazing together!</p>
                    </div>
                </div>
                <Image width={'500px'} />
            </div>
        </section>
    )
}

export default Home