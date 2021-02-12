import React, { useState } from 'react'
import './ShowData.css'

const ShowData = ({technicalId}) => {
return(
    <div className="hours">
    <h3>Normal Hours</h3>
    <p className="des"><strong>normal: </strong>{technicalId.normalHours}</p>
    <p className="des"><strong>night: </strong>{technicalId.nightHours}</p>
    <p className="des"><strong>sunday: </strong>{technicalId.sundayHours}</p>
    <h3>Extra Hours</h3>
    <p className="des"><strong>normal: </strong>{technicalId.normalExtraHours}</p>
    <p className="des"><strong>night: </strong>{technicalId.nightlyOvertime}</p>
    <p className="des"><strong>sunday: </strong>{technicalId.sundayExtraHours}</p>
    </div>
)

}

export default ShowData;