import './sidebar.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faChartLine,faUser ,faSitemap,faArrowRightFromBracket,faGears,faRectangleList,faLaptopMedical,faBell} from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Abhi Admin</span>
			</div>
			<hr />
			<div className="center">
				<ul>
                    <h4>MAIN</h4>
					<li>
						<FontAwesomeIcon icon={faChartLine} />
						<span>Dashboard</span>
					</li>
                    <h4>LISTS</h4>
					<li>
                        <FontAwesomeIcon icon={faUser} />
						<span>Users</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faSitemap} />
						<span>Products</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faTruck} />
						<span>Delivery</span>
					</li>
                    <h4>USEFUL</h4>
                    <li>
						<FontAwesomeIcon icon={faChartLine} />
						<span>Stats</span>
					</li>
                    <li>
						<FontAwesomeIcon icon={faBell} />
						<span>Notifications</span>
					</li>
                    <h4>SERVICE</h4>
                    <li>
						<FontAwesomeIcon icon={faLaptopMedical} />
						<span>System Health</span>
					</li>
                    <li>
						<FontAwesomeIcon icon={faRectangleList} />
						<span>Logs</span>
					</li>
                    <li>
						<FontAwesomeIcon icon={faGears} />
						<span>Settings</span>
					</li>
                    <h4>USER</h4>
                    <li>
						<FontAwesomeIcon icon={faUser} />
						<span>Profile</span>
					</li>
                    <li>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
						<span>Logut</span>
					</li>
				</ul>
			</div>
			<div className="down">
				<div className='chooseColor'></div>
                <div className='chooseColor1'></div>
			</div>
		</div>
	);
};
export default Sidebar;
