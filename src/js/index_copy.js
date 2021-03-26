//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SecondsCounter(props) {
	return (
		<div className="mainCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.numberSix}</div>
			<div className="five">{props.numberFive}</div>
			<div className="four">{props.numberFour}</div>
			<div className="three">{props.numberThree}</div>
			<div className="two">{props.numberTwo}</div>
			<div className="one">{props.numberOne}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	numberSix: PropTypes.number,
	numberFive: PropTypes.number,
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number
};

let counter = 0;

setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;

	//render your react application
	ReactDOM.render(
		<SecondsCounter
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
			numberFive={five}
			numberSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
