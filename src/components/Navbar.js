import React from 'react'

function Navbar() {
    return (
        <div>
            <nav style={{ backgroundColor: 'black' }} className={`navbar navbar-expand-lg navbar-dark fixed-top site-navbar-target`} >
                <div className="container">
                    <a className="navbar-brand" href="/"><h4>Asad M.Furqan</h4></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ margin: '0px 20%' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#homeSection">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#aboutSection">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#skillsSection">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#projectSection">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar