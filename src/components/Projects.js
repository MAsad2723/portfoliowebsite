import React from 'react'
import Card from './Card'
import portfolioLogo from '../static/portfolioWebsite.jpeg'
import khanakhao from '../static/khanakhao.webp'
import iCoder from '../static/about-2.jpg'
import calculator from '../static/calculator.png'
import danceWebsite from '../static/danceWebsite.png'
import iNotebook from '../static/iNotebook.jpeg'
import textUtils from '../static/textUtils.jpeg'
import companyEmployee from '../static/companyEmployee.jpeg'
import basicPortfolio from '../static/basicPortfolio.png'
function Projects() {
    return (
        <section id="projectSection">
            <div className="section">
                <div className="container my-4 ">
                    <h1 className='yellow'>Projects</h1>
                    <div className='row d-flex justify-content-center'>
                        <Card img={khanakhao} heading='Khana Khao - Food App' desc='React.js | Node.js | Oracle DB | Tailwind-css' link='' />

                        <Card img={portfolioLogo} heading='Portfolio Website' desc='React.js ' link='https://github.com/MAsad2723/portfoliowebsite' />

                        <Card img={iNotebook} heading='iNotebook' desc='React.js + Context API | Node.js | Express.js | MongoDB ' link='https://github.com/MAsad2723/inotebook' />

                        <Card img={textUtils} heading='Text Utilities' desc='React.js | Node.js | Express.js | MongoDB ' link='https://github.com/MAsad2723/textUtils' />

                        <Card img={danceWebsite} heading='Dance Academy' desc='HTML | CSS | Bootstrap | Express.js | Pug-template engine ' link='https://github.com/MAsad2723/Dance-Website' />

                        <Card img={calculator} heading='Calculator' desc='HTML | CSS | JS ' link='https://github.com/MAsad2723/Calculator' />

                        <Card img={iCoder} heading='iCoder' desc='HTML | CSS | Bootstrap' link='https://github.com/MAsad2723/iCoder' />

                        <Card img={companyEmployee} heading='Company Employee' desc='Only Backend created with Django using Django REST Framework' link='https://github.com/MAsad2723/REST-Framework-In-Django' />

                        <Card img={basicPortfolio} heading='Basic Portfolio' desc='Frontend : HTML, CSS, Bootstrap.
                        Backend : Django' link='https://github.com/MAsad2723/firstdjangoproject' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects