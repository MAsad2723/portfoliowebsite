import React from 'react'
import Card from './Card'
import portfolioLogo from '../static/PORTFOLIO WEBSITE.png'
import khanakhao from '../static/khanakhao.webp'
function Projects() {
    return (
        <section id="projectSection">
            <div className="section">
                <div className="container my-4 ">
                    <h1 className='yellow'>Projects</h1>
                    <div className='row d-flex justify-content-center'>
                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js' />
                        <Card img={khanakhao} heading='Khana Khao - Food App' desc='React.js | Node.js | Oracle DB | Tailwind-css' />
                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js' />
                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js' />
                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js' />
                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects