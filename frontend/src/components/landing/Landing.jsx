import React from 'react';
import styled from 'styled-components';
import logo from '../../svg/logo_dark.svg';
import pinkR from '../../svg/pink-rectangle.svg';
import blueR from '../../svg/blue-rectangle.svg';
import arrow from '../../svg/Arrow.svg';
import { useState } from 'react';

const LandingStructure = ({setFirstLanding, className}) => {

	const [showSpinner, setShowSpinner] = useState(false)
	localStorage.setItem('MyBrowser', 'Tom')
	
	const handleClick = () => {

		setShowSpinner(true);
	
		const timer = setTimeout(() => {
			setFirstLanding(true)
		  }, 3000);
		  return () => {
			  clearTimeout(timer)
		  }
	}
	
	return (
		<div className={className}>	
			{ showSpinner ? 
				<div className="spinnerBkg">
					<div id="spinner-container" className="show">
						<svg id="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 821.94 816.64">
							<g id="Layer_2" data-name="Layer 2">
								<g id="colored">
									<path fill="none" stroke="#f72585" strokeWidth="20px" className="pink" d="M45.69,571.27A399.54,399.54,0,0,1,10,405.67c0-195.85,140.42-358.91,326.08-394"/>
									<path fill="none" stroke="#560bad" strokeWidth="20px" className="darkest" d="M671.08,710.84A399.37,399.37,0,0,1,411,806.64q-11.42,0-22.68-.63"/>
									<path fill="none" stroke="#4361ee" strokeWidth="20px" className="blue" d="M530.21,22.73c163.22,50.77,281.73,203,281.73,382.94a400.66,400.66,0,0,1-20.33,126.42"/>
									<path fill="none" stroke="#7209b7" strokeWidth="20px" className="purple" d="M99.57,254.82C155.62,139.35,274,59.74,411,59.74c140.94,0,262.19,84.28,316.11,205.2"/>
									<path fill="none" stroke="#b5179e" strokeWidth="20px" className="pinkish" d="M563.11,716.44A344.52,344.52,0,0,1,411,751.61c-181.68,0-330.64-140.05-344.83-318.08"/>
								</g>
							</g>
						</svg>
					</div> 
				</div>
				: null}
			<img className="logo" src={logo} alt="logo" />
			<h1><span className="headerLn1"><span className="the">The </span><span className="latest">latest</span></span>  <span className="headerLn2"><span className="tech">tech </span><span className="news">news</span></span> </h1>
			<img className="pinkRect" src={pinkR} alt ="pink rectangle" />
			<img className="blueRect" src={blueR} alt ="blue rectangle"/>
			<button className="btn" onClick={handleClick}>Start reading</button>
			<p className="arrowText">All in one place</p>
			<img className="arrow" src={arrow} alt ="arrow" />
		</div>
	)
}

const Landing = styled(LandingStructure)`

	position: relative;
	top: 0;
	left: 0;
	
	.spinnerBkg {
		width: 100%;
		height: 100vh;
		background-color: #00000089;
		display: flex;
		justify-content: center;
			align-items: center;
		z-index: 50;
	}

	#spinner-container {
			background-color: #00000089;
			width: 100%;
			height: 100vh;

			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 60;

			#spinner {
				animation: rotate 3s linear infinite;
				z-index: 2;
				width: 30%;

				.pink,.darkest,.blue,.purple,.pinkish{
					fill:none;
					stroke-linecap:square;
					stroke-miterlimit:10;
					stroke-width:20px;
					animation: dash 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
				}
				.pink{
					stroke:#f72585;
				}
				.darkest{
					stroke:#560bad;
					animation-delay: 0.5s;
				}
				.blue{
					stroke:#4361ee;
					animation-delay: 0.3s;
				}
				.purple{
					stroke:#7209b7;
					animation-delay: 0.2s;
					animation-duration: 4s;
					animation-direction: reverse;
				}
				.pinkish{
					stroke:#b5179e;
					animation-delay: 0.5s;
					animation-direction: reverse;
				}

				@keyframes rotate {
					100% {
						transform: rotate(360deg);
					}
				}

				@keyframes dash {
					0% {
						stroke-dasharray: 25%, 25%;
						stroke-dashoffset: 0;
					}
					25% {
						stroke-dasharray: 50%, 100%;
						stroke-dashoffset: 0;
					}
					50% {
						stroke-dasharray: 100%, 200%;
						stroke-dashoffset: 50%;
					}
					75% {
						stroke-dasharray: 50%, 100%;
						stroke-dashoffset: 50%;
					}
					100% {
						stroke-dasharray: 25%, 25%;
						stroke-dashoffset: 100%;
					}
				}
			}
		}

	.logo {
		position: absolute;
		top: 7vh;
		left: 50%;
		transform: translateX(-50%);
		height: 23vh;
	}

	.headerLn1 {
		position: absolute;
		top: 35vh;
		right: 10vw;
		z-index: 10;

		display: block;

		font-family: Sen;
		font-style: normal;
		font-weight: 800;
		font-size: 3em;
		line-height: 115px;
		text-transform: uppercase;

		color: #4CC9F0;

		text-shadow: -10px 10px 10px rgba(0, 0, 0, 0.25);
	}

	.headerLn2 {

		position: absolute;
		top: 45vh;
		right: 30vw;
		z-index: 10;

		display: block;

		font-family: Sen;
		font-style: normal;
		font-weight: 800;
		font-size: 2.5em;
		line-height: 87px;
		text-transform: uppercase;

		color: #4CC9F0;

		text-shadow: -10px 10px 10px rgba(0, 0, 0, 0.25);
	}
	
	.pinkRect {
		position: absolute;
	}
	.blueRect {
		position: absolute;
	}
	.btn {
		position: absolute;
		top: calc(61vh - 25px);
		left: calc(14vw - 55px);
		color: #560BAD;
		text-transform: uppercase;
		font-family: $sen;
		font-weight: 700;
		font-size: 2.3em;
		letter-spacing: 0.1em;
		background-color: transparent;
		z-index: 10;
		padding: 20px 140px 75px 75px;
		border: none;

		&:hover {
			transform: rotate(7deg);
			transform-origin: 5% 5%;
		}
	}
	.arrow {
		position: absolute;
		top: 64vh;
		left: 42vw;
		width: 50vw;
	}
	.arrowText {
		position: absolute;
		top: 55vh;
		right: 8vw;
		text-transform: uppercase;
		color: #D61E91;
		font-family: $sen;
        letter-spacing: 0.2em;
		font-weight: 700;
        font-size: 3em;		
	}
@media only screen and (min-width: 1700px) and (min-height: 800px) {

	position: relative;
	top: 0;
	left: 0;

	.logo {
		position: absolute;
		top: 7vh;
		left: 50%;
		transform: translateX(-50%);
		height: 23vh;
	}

	.headerLn1 {
		position: absolute;
		top: 35vh;
		right: 10vw;

		font-size: 3em;
		line-height: 115px;
	}

	.headerLn2 {
		position: absolute;
		top: 45vh;
		right: 30vw;

		font-size: 2.5em;
		line-height: 87px; 
	}
	.pinkRect {
		position: absolute;
		top: 30vh;
		left: 7vw;	
	}
	.blueRect {
		position: absolute;
		top: 58vh;
		left: 10vw;
		height: 20vh;
	}

	.btn {
		position: absolute;
		top: calc(61vh - 25px);
		left: calc(14vw - 55px);
		font-size: 2.3em;
		letter-spacing: 0.1em;
		z-index: 10;
		padding: 20px 140px 75px 75px;
	}

	.arrow {
		position: absolute;
		top: 64vh;
		left: 42vw;
		width: 50vw;
	}
	.arrowText {
		position: absolute;
		top: 55vh;
		right: 8vw;
        letter-spacing: 0.2em;
        font-size: 3em;		
	}
}
//Fanni
 @media only screen and (min-width: 1300px) and (max-width: 1699px) {

	position: relative;
	top: 0;
	left: 0;

	.logo {
		position: absolute;
		top: 8vh;
		left: 50%;
		transform: translateX(-150%);
		height: 25vh;
	}

	.headerLn1 {
		position: absolute;
		top: 25vh;
		right: 10vw;

		font-size: 2.7em;
		line-height: 115px;
	}

	.headerLn2 {
		position: absolute;
		top: 40vh;
		right: 25vw;

		font-size: 2.4em;
		line-height: 87px; 
	}
	.pinkRect {
		position: absolute;
		top: 40vh;
		left: 7vw;
		height: 40vh;	
	}
	.blueRect {
		position: absolute;
		top: 56vh;
		left: 5vw;
		height: 21vh;
	}

	.btn {
		position: absolute;
		top: calc(61vh - 25px);
		left: calc(10vw - 35px);
		font-size: 2em;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 64vh;
		left: 35vw;
		width: 55vw;
	}
	.arrowText {
		position: absolute;
		top: 53vh;
		right: 8vw;
		letter-spacing: 0.1em;
		font-size: 3em;	
		font-weight: 500;
		text-transform: lowercase;	
	}
} 

//David
@media only screen and (min-width: 1026px) and (max-width: 1299px) {

	position: relative;
	top: 0;
	left: 0;

	.logo {
		position: absolute;
		top: 9vh;
		left: 50%;
		transform: translateX(-180%);
		height: 25vh;
	}

	.headerLn1 {
		position: absolute;
		top: 22vh;
		right: 10vw;

		font-size: 2.7em;
		line-height: 115px;

	}

	.headerLn2 {
		position: absolute;
		top: 38vh;
		right: 25vw;

		font-size: 2.4em;
		line-height: 87px; 

	}
	.pinkRect {
		position: absolute;
		top: 36vh;
		left: 1vw;
		width: 49vw;	
	}
	.blueRect {
		position: absolute;
		top: 56vh;
		left: 5vw;
		height: 21vh;
	}

	.btn {
		position: absolute;
		top: calc(61vh - 25px);
		left: calc(10vw - 35px);
		font-size: 2em;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 65vh;
		left: 35vw;
		width: 45vw;
	}
	.arrowText {
		position: absolute;
		top: 49vh;
		right: 6vw;
		letter-spacing: 0.1em;
		font-size: 2.9em;	
		font-weight: 500;
		text-transform: lowercase;	
	}
}

//iPadPro + iPad
@media only screen and (min-width: 768px) and (max-width: 1025px) {

position: relative;
top: 0;
left: 0;
width: 100%;
height: 100vh;

.logo {
	position: absolute;
	top: 10vh;
	left: 50vw;
	transform: translateX(-45%);
	height: 15vh;
}

.headerLn1 {
	position: absolute;
	top: 32vh;
	left: 15vw;
	font-size: 2.5em;
	line-height: 115px;
	text-transform: uppercase;	

	.latest {
		position: absolute;
		top: 5vh;
		left: 25vw;
		text-transform: lowercase;
		font-size: 50px;
	}
}

	.headerLn2 {
		position: absolute;
		top: 30vh;
		left: 42vw;
		font-size: 50px;
		line-height: 87px;
		text-transform: lowercase;
		.news {
			text-transform: uppercase;
			font-size: 70px;
			position: absolute;
			top: 3vh;
			left: 20vw;
		}
	}
	.pinkRect {
		position: absolute;
		top: 60vh;
		left: 10vw;
		width: 80vw;	
	}
	.blueRect {
		position: absolute;
		top: 70vh;
		left: 10vw;
		height: 20vh;
	}

	.btn {
		position: absolute;
		top: 72vh;
		left: 25vw;
		font-size: 2.5em;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 65vh;
		left: 35vw;
		width: 45vw;
		display: none;
	}
	.arrowText {
		position: absolute;
		top: 49vh;
		right: 6vw;
		letter-spacing: 0.1em;
		font-size: 2.9em;	
		font-weight: 500;
		text-transform: lowercase;	
		
	}
}
//mobile big
@media only screen and (min-width: 481px) and (max-width: 767px) {

	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	.logo {
		position: absolute;
		top: 20vh;
		left: 22vw;
		transform: translateX(-35%);
		height: 25vh;
	}

.headerLn1 {
	position: absolute;
	top: 10vh;
	left: 60vw;
	font-size: 70px;
	line-height: 80px;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	
	span {
		display: inline-block;
	}

	.latest {
		text-transform: lowercase;
		font-size: 70px;
	}
}

	.headerLn2 {
		position: absolute;
		top: 32vh;
		left: 90vw;
		font-size: 70px;
		line-height: 87px;
		text-transform: lowercase;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		.news {
			text-transform: uppercase;
			font-size: 70px;
		}
	}
	.pinkRect {
		position: absolute;
		top: 60vh;
		left: 10vw;
		width: 80vw;
		transform: rotate(180deg)
	}
	.blueRect {
		position: absolute;
		top: 65vh;
		left: 15vw;
		height: 15vh;
		transform: rotate(180deg)
	}

	.btn {
		position: absolute;
		top: 71vh;
		left: 19vw;
		font-size: 2em;
		letter-spacing: 0;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 65vh;
		left: 35vw;
		width: 45vw;
		display: none;
	}
	.arrowText {
		position: absolute;
		top: 49vh;
		right: 6vw;
		letter-spacing: 0.1em;
		font-size: 2.9em;	
		font-weight: 500;
		text-transform: lowercase;	
		display: none;
	}
}
//mobile medium
@media only screen and (min-width: 400px) and (max-width: 480px) {

	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	.logo {
		position: absolute;
		top: 4vh;
		left: 22vw;
		transform: translateX(-35%);
		height: 17vh;
	}

	.headerLn1 {
	position: absolute;
	top: 10vh;
	left: 60vw;
	font-size: 70px;
	line-height: 80px;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

		span {
			display: inline-block;
		}

		.latest {
			text-transform: lowercase;
			font-size: 70px;
		}
	}

	.headerLn2 {
		position: absolute;
		top: 32vh;
		left: 90vw;
		font-size: 70px;
		line-height: 87px;
		text-transform: lowercase;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		.news {
			text-transform: uppercase;
			font-size: 70px;
		}
	}
	.pinkRect {
		position: absolute;
		top: 65vh;
		left: 10vw;
		width: 85vw;
		transform: rotate(180deg)
	}
	.blueRect {
		position: absolute;
		top: 65vh;
		left: 10vw;
		height: 15vh;
		transform: rotate(180deg)
	}

	.btn {
		position: absolute;
		top: 71vh;
		left: 16vw;
		font-size: 30px;
		letter-spacing: 0;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 65vh;
		left: 35vw;
		width: 45vw;
		display: none;
	}
	.arrowText {
		position: absolute;
		top: 0vh;
		right: 0;
		left: -65vw;
		letter-spacing: 0;
		font-size: 2em;	
		font-weight: 500;
		text-transform: lowercase;
		transform: rotate(270deg);
		
	}
}
//mobile small
@media only screen and (min-width: 321px) and (max-width: 400px) {

	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	.logo {
		position: absolute;
		top: 1vh;
		left: 75vw;
		height: 15vh;
	}

	.headerLn1 {
		position: absolute;
		top: 10vh;
		left: 5vw;
		font-size: 50px;
		line-height: 55px;
		text-transform: uppercase;	
		display: flex;
		flex-direction: column;

		.latest {
			font-size: 70px;
		}
	}

	.headerLn2 {
		position: absolute;
		top: 24vh;
		left: 18vw;
		font-size: 1em;
		line-height: 87px;
		text-transform: lowercase;
		display: flex;
		flex: column;
		.news {
			text-transform: uppercase;
			font-size: 70px;
		}
	}
	.pinkRect {
		position: absolute;
		top: 65vh;
		left: 5vw;
		width: 80vw;
		transform: rotate(15deg);
	}
	.blueRect {
		position: absolute;
		top: 65vh;
		left: 15vw;
		height: 15vh;
		transform: rotate(174deg);
	}

	.btn {
		position: absolute;
		top: 70vh;
		left: calc(12vw - 35px);
		font-size: 2em;
		z-index: 10;
		padding: 15px 60px 45px 25px;
	}

	.arrow {
		position: absolute;
		top: 55vh;
		left: 35vw;
		width: 40vh;
		transform: rotate(270deg);
	}
	.arrowText {
		position: absolute;
		top: 49vh;
		right: -5vw;
		letter-spacing: 0.02em;
		font-size: 1.5em;	
		font-weight: 500;
		text-transform: lowercase;
		transform: rotate(90deg);
		
	}
}

//mobile narrow
@media only screen and (max-width: 320px) {

	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	.logo {
		position: absolute;
		top: 1vh;
		left: 66vw;
		height: 15vh;
	}

	.headerLn1 {
		position: absolute;
		top: 10vh;
		left: 5vw;
		font-size: 50px;
		line-height: 55px;
		text-transform: uppercase;	
		display: flex;
		flex-direction: column;

		.latest {
			font-size: 63px;
		}
	}

	.headerLn2 {
		position: absolute;
		top: 26vh;
		left: 12vw;
		font-size: 1em;
		line-height: 87px;
		text-transform: lowercase;
		display: flex;
		flex: column;
		.news {
			text-transform: uppercase;
			font-size: 50px;
		}
	}
	.pinkRect {
		position: absolute;
		top: 63vh;
		left: 5vw;
		width: 80vw;
		transform: rotate(15deg);
	}
	.blueRect {
		position: absolute;
		top: 49vh;
		left: -21vw;
		height: 12vh;
		transform: rotate(70deg);
		z-index: 19;
	}

	.btn {
		position: absolute;
		top: 72vh;
		left: 15vw;
		font-size: 1.3em;
		letter-spacing: 0;
		z-index: 10;
		padding: 10px;
		background-color: #4cc9f0;
		box-shadow: 5px 5px 5px #0000008f ;
	}

	.arrow {
		position: absolute;
		top: 55vh;
		left: -10vw;
		width: 35vh;
		transform: rotate(250deg);
		z-index: 20;
	}
	.arrowText {
		position: absolute;
		top: 34vh;
		right: 20vw;
		letter-spacing: 0;
		font-size: 1.3em;	
		font-weight: 500;
		text-transform: lowercase;	
	}
}
`
export default Landing
