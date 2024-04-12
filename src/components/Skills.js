import React from 'react'
import SkillsBox from './SkillsBox'

function Skills() {
    let skills1 = ["HTML", "CSS", "JS", "React.js", "Express.js", "MongoDB", "Node.js", "Bootstrap"]
    let skills2 = ["SQL", "Python", "Django", "C", "C++", "C#", "Git", "Assembly",]
    return (
        <section id='skillsSection' className='container '>
            <div className="section">
                <h1 className='yellow'>Skills</h1>
                <div className="container m-4">
                    <div className="row">
                        {skills1.map((skill) => {
                            return <SkillsBox skill={skill} />
                        })}
                    </div>
                    <div className="row">
                        {skills2.map((skill) => {
                            return <SkillsBox skill={skill} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills