import React from 'react'
import { faEllipsisVertical, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import './featured.scss';
const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1>Total Revenue</h1>
				<div className="icon">
					<FontAwesomeIcon icon={faEllipsisVertical} />
				</div>
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={'70%'} strokeWidth={1} className="circle" />
					<div className="salesDesc">
						<div className="weekTargets">
							<p>Lastmonth</p>
							<FontAwesomeIcon icon={faAngleUp} />
						</div>
						<p className="salesPara">Previous transactions processing ,last payments may not be included</p>
					</div>
				</div>
				<div className="targetDiv">
					<div className="target">
						<div className="weekTargets">
							<p>Lastmonth</p>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
						<h3>$12.4k</h3>
					</div>
					<div className="target">
						<div className="weekTargets">
							<p>Lastmonth</p>
							<FontAwesomeIcon icon={faAngleUp} />
						</div>
						<h3>$12.4k</h3>
					</div>
					<div className="target">
						<div className="weekTargets">
							<p>Lastmonth</p>
							<FontAwesomeIcon icon={faAngleUp} />
						</div>
						<h3>$12.4k</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Featured;
