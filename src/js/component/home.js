import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component

export function SecondsCounter(props) {
	return (
		<div className="mainCounter">
			<div className="icon">
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div className="six">{props.numberSix % 10}</div>
			<div className="five">{props.numberFive % 10}</div>
			<div className="four">{props.numberFour % 10}</div>
			<div className="three">{props.numberThree % 10}</div>
			<div className="two">{props.numberTwo % 10}</div>
			<div className="one">{props.numberOne % 10}</div>
		</div>
	);
}

SecondsCounter.defaultProps = {
	numberSix: 0,
	numberFive: 0,
	numberFour: 0,
	numberThree: 0,
	numberTwo: 0,
	numberOne: 0
};

SecondsCounter.propTypes = {
	numberSix: PropTypes.number,
	numberFive: PropTypes.number,
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number
};
