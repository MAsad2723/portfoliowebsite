import React from 'react'

function SkillsBox(prop) {
    return (
        <div className='container col-lg-1 col-md-2 col-sm-2 col-3 m-3 border skillbox' style={{ padding: '10px', borderRadius: '10px' }}>
            {prop.skill}
        </div>
    )
}

export default SkillsBox    