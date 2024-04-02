import React from 'react'

function SkillsBox(prop) {
    return (
        <div className='container col m-3 border skillbox' style={{ padding: '10px', borderRadius: '10px' }}>
            {prop.skill}
        </div>
    )
}

export default SkillsBox    