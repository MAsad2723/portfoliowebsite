import React from 'react'
import ProfilePicture from '../static/pfp.png'
function Home() {
    return (
        <div>
            <div className="row d-flex align-items-center container" style={{ margin: 'auto', border: '2px solid gold' }}>
                <div className="col container-fluid text-start">
                    <div>
                        <h1>
                            HELLO, I'm <span style={{ color: 'gold' }}>Asad M. Furqan</span>
                        </h1>
                    </div>
                    <div>
                        <p style={{ fontSize: '20px' }}>A passionate software engineer crafting awesome digital experiences. From designing beautiful websites to building strong backend systems, I'm here to make your online dreams a reality! Let's create something amazing together!</p>
                    </div>
                </div>
                <div className="col-5" >
                    <img src={ProfilePicture} alt="" width={'60%'} />
                </div>
            </div>
        </div>
    )
}

export default Home