import React from 'react';
import styled from 'styled-components';
import slideimage from './slide-home.png';
import fetchNews from '../../utils/FetchNews';
import { useState, useEffect } from 'react';


const NewsfeedStructure = ({ className }) => {
	const [page, setPage] = useState(1);
	const [news, setNews] = useState(null);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	})

	useEffect(() => {
		if(news === null) {
            fetchNews(page).then(data => setNews(data)) 
        } else {
            let tempNews = JSON.parse(JSON.stringify(news));
            fetchNews(page)
			.then(data => (tempNews['articles'] = [...news['articles'], ...data['articles']]))
            .then(setNews(tempNews))
        }
		console.log(news)

	}, [page])
	
    function handleScroll() {
		const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
		if (bottom) {
			setPage(page + 1)
		}
    }

	return (
		<div className={className}>
			<div className="slide">
				<img src={slideimage} alt="slide"/>
				<div className="divider">
					<h3>trending now</h3>
				</div>
			</div>

			<div id="newsfeed-container">
				{news ? news['articles'].map((article, index) => {
					if (index !== 0 && index % 3 === 0) {
						return (
							<div key={index} className="article fat" style={{backgroundImage:`url(${article.urlToImage})`}}>
								<a href={article.url}><h1>{article.title}</h1></a>
								<p>{article.description ? article.description : null}</p>
							</div>
						)
					} else if (index === 0) {
						return (
							<div key={index} className="article wide" style={{backgroundImage:`url(${article.urlToImage})`}}>
								<a href={article.url}><h1>{article.title}</h1></a>
								<p>{article.description ? article.description : null}</p>
							</div>
						)
					} else {
						return (
							<div key={index} className="article simple" pic={article.urlToImage} style={{backgroundImage:`url(${article.urlToImage})`}}>
								<a href={article.url}><h1>{article.title}</h1></a>
							</div>
						)
					}
				})
				: <div id="spinner-container" className="show">
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
				</div>}
			</div>
		</div>
	)
}

const Newsfeed = styled(NewsfeedStructure)`
	.slide {
		position: relative;
		width: 100%;
		max-height: 35vh;
		z-index: -10;

		& img {
			width: 100%;
		}

		.divider {
			width: 100%;
			max-height: 6vh;
			background: linear-gradient(90deg, #4E058D 38.34%, #330878 100%);
	
			display: flex;
			justify-content: center;
			align-items: center;
	
			h3 {
				color: #f72585;
				font-weight: normal;
				font-size: 1em;
				font-family: "Sen";
				letter-spacing: 0.5em;
			}
		}
	}


	//NEWSFEED LAYOUT
	#newsfeed-container {
		width: 85%;
		min-height: fit-content;

		margin: auto;
		
		display: grid;
		grid-auto-flow: row;

		grid-template-columns: repeat(3, 1fr);
		gap: 3vh;

		// SPINNER  + ANIMATION
		#spinner-container {
			width: 100%;
			height: 300px;

			display: flex;
			justify-content: center;
			align-items: center;

			#spinner {
				animation: rotate 3s linear infinite;
				z-index: 2;
				width: 10%;

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

		.article:last-child {
			margin-bottom: 10vh;
		}

		.article {
			position: relative;
			background-color: #330878;
			background-size: cover;

			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;
		}
		
		.article a, h1, p {
			/* position: absolute; */
			display: inline;
			background-color: #330878;
			color: #4CC9F0;
			font-family: "Sen";
			padding: 0 2vh;
			text-decoration: none;
			
		}

		.article h1 {
			background-color: none;
			padding: 0;
		}
		
		.simple {
			width: 100%;
			height: 200px;
			background-size: cover;
			background-color: #330878;
			
			a {
				padding: 1vh 2vh;
				h1 {
					font-size: 1em;
				}
			}
		}
		.wide {
			margin-top: 15vh;
			width: 100%;
			height: 400px;
			background-color: #330878;
			background-size: cover;
			grid-column: span 3;

			a {
				h1 {
					margin-bottom: 1vh;
				}
			}
		}

		.fat {
			width: 100%;
			height: 400px;
			background-color: #330878;
			grid-row: span 2;

			a {
				margin: 0 0 2vh 0;
				h1 {
					font-size: 1.5em;
				}
			}

			p {
				margin: 0 0 2vh 0;
			}
		}		

	}
	@media screen and (max-width: 1190px) {
		#newsfeed-container {
			width: 90%;
			min-height: fit-content;

			margin: auto;
			
			display: grid;
			grid-auto-flow: row;

			grid-template-columns: 1fr;
			gap: 3vh;

			.article {
				grid-column: 1;
				height: 400px;
				a {
					font-size: large;
				}
			}

			.wide {
				grid-column: auto;
			}

			.fat {
				grid-row: auto;
			}
		}
	}

	@media screen and (max-width: 361px) and (max-width: 361px) and (max-height: 641px) and (max-height: 641px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 411px) and (max-width: 411px) and (max-height: 732px) and (max-height: 732px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 411px) and (max-width: 411px) and (max-height: 824px) and (max-height: 824px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 320px) and (max-width: 320px) and (max-height: 569px) and (max-height: 569px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 375px) and (max-width: 375px) and (max-height: 668px) and (max-height: 668px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 414px) and (max-width: 414px) and (max-height: 737px) and (max-height: 737px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 30vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 375px) and (max-width: 375px) and (max-height: 813px) and (max-height: 813px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 25vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 768px) and (max-width: 768px) and (max-height: 1025px) and (max-height: 1025px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 25vh;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1024px) and (max-height: 1367px) and (max-height: 1367px) {
		.slide {
			.divider {
				margin-bottom: 5vh;
			}
		}
		#newsfeed-container {
			grid-template-columns: 1fr 1fr;

			.article {
				height: 25vh;
				grid-column: auto;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 0;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 540px) and (max-width: 540px) and (max-height: 721px) and (max-height: 721px) {
		.slide {
			.divider {
				margin-bottom: 5vh;
			}
		}
		#newsfeed-container {
			grid-template-columns: 1fr;

			.article {
				height: 25vh;
				grid-column: auto;
				a {
					h1 {
						font-size: medium;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 0;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 280px) and (max-height: 654px) and (max-height: 654px) {
		#newsfeed-container {
			.article:last-child {
				margin-bottom: 10vh;
			}

			.article {
				height: 20vh;
				a {
					h1 {
						font-size: small;
					}
				}
				p {
					display: none;
				}
			}

			.wide {
				margin-top: 5vh;
			}

			.simple,
			.wide,
			.fat {
				a {
					margin: 0;
					padding: 1vh;
				}
			}
		}
	}



`

export default Newsfeed
