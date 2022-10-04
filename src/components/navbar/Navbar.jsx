import './navbar.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faGlobe ,faMoon,faCompress,faBell,faMessage,faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='navbarWrapper'>
                <div className='searchDiv'>
                    <input />
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
                <div className='iconsDiv'>
                    <div className='languageIcon'>
                        <FontAwesomeIcon icon={faGlobe}/>
                        <span>English</span>
                    </div>
                    <FontAwesomeIcon icon={faMoon}/>
                    <FontAwesomeIcon icon={faCompress}/>
                    <div className='notifiIcon'>
                        <FontAwesomeIcon icon={faBell}/>
                        <span className='notify'>4</span>
                    </div>
                    <div className='msgIcon'>
                        <FontAwesomeIcon icon={faMessage}/>
                        <span className='notify'>2</span>
                    </div>
                    <FontAwesomeIcon icon={faBars}/>
                    <div className='profilePic'>
                        <img src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
                         alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar