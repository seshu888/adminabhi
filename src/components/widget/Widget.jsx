import './widget.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faPerson } from '@fortawesome/free-solid-svg-icons'
const Widget=()=>{
    return(
        <div className='widget'>
            <div className='widgetWrapper'>
                <div className='right'>
                    <span className='title'>USERS</span>
                    <span className='counter'>23757</span>
                    <span className='link'>see all users</span>
                </div>
                <div className="left">
                    <div className='percentage positive'>
                        <FontAwesomeIcon icon={faAngleUp}/>
                        <span>20%</span>
                    </div>
                    <FontAwesomeIcon icon={faPerson} className="icon"/>
                </div>
            </div>
        </div>
    )
}
export default Widget