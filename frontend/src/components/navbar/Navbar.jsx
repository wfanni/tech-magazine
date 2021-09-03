import React from 'react';
import styled from 'styled-components';
import headerBG from '../../svg/headerBG.svg';
import logo from '../../svg/logo_dark.svg';
// import logospin from './logospin.svg';
import {Link} from 'react-router-dom';
import './hamburger.css';

const NavbarStructure = ({ className }) => {
    
    const menuToggle = () => {
        document.getElementById("menu").classList.toggle("is-active");
        document.getElementById("navbarUL").classList.toggle("hammenu");
    }

    return (
        <div className={className}>

            <div className="headerBG" ></div>
            <img className="logo" src={logo} alt="logo" />

            <button onClick={menuToggle} id="menu" className="hamburger hamburger--elastic" type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>

            <ul id="navbarUL">
                <li className="navbarLI">
                    <Link to="/">home</Link>
                </li>
                <li className="navbarLI">
                    <Link to="/science">science</Link>
                </li>
                <li className="navbarLI">
                    <Link to="/entertainment">entertainment</Link>
                </li>
                <li className="navbarLI">
                    <Link to="/tech">tech</Link>
                </li>
                <li className="navbarLI">
                    <Link to="/health">health</Link>
                </li>
            </ul>
        </div>
    )
}

const Navbar = styled(NavbarStructure)`
    position: relative;
    width: 100%;
    height: 100px;

    .headerBG {
        width: 100%;
        height: 22vh;
        background-image: url(${headerBG});
        background-repeat: no-repeat;
    }
    
    .logo {
        position: absolute;
        top: 3vh;
        left: 16vh;
        max-width: 14%;
    }

    .hamburger {
        display: none;
        position: absolute;
        right: 3vh;
        top: 3vh;
    }

    #navbarUL {
        position: absolute;
        top: 0;
        right: 35vh;

        width: 100%;
        min-height: 100%;

        padding: 0;
        margin: 0;
        list-style: none;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .navbarLI:first-child {
            margin-left: 50%;
        }

        .navbarLI {
            a {
                position: relative;
                padding: 5px;
                text-decoration: none;
                color: #4cc9f0;
                font-family: $sen;
                letter-spacing: 0.2em;
                font-size: 1.2em;
                /* border-bottom: 3px solid transparent; */
                transition: color 0.5s, border-bottom 0.5s;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2px;
                    width: 100%;
                    background-color: currentColor;
                    transform: scaleX(0);
                    transition: transform 0.3s;

                }
            }
            &:hover,
            &:focus {
                a {
                    color: #f72585;
                    /* border-bottom: 3px solid #f72585; */

                    &::after {
                    transform: scaleX(1);

                    }

                }
            }
        }

        &.hammenu {
            display: flex;
            max-width: 50%;
            min-height: 100vh;
            right: 0;
            background: linear-gradient(90deg, rgba(41, 2, 98, 0) 0%, rgba(41, 2, 98, 0.99006) 56.04%, #290262 65.94%);
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 1vh;
            padding: 10vh 2vh 0 0;
            z-index: 20;

            .navbarLI:first-child {
                margin: 0;
            }
        }
        
    }

    // GALAXY FOLD
    @media screen and (min-width: 280px) and (max-width: 280px) and (max-height: 654px) and (max-height: 654px) {
        height: 80px;
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .hamburger {
            top: 2vh;
        }

        #navbarUL.hammenu {
            max-width: 100%;
            padding: 15vh 2vh 0 0;

            .navbarLI {
                a {
                    font-size: 1em;
                }
            }

        }
    }
    // SURFACE DUO
    @media screen and (min-width: 540px) and (max-width: 540px) and (max-height: 721px) and (max-height: 721px)  {
        height: 120px;
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .hamburger {
            top: 4.5vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;
            gap: 3vh;

            .navbarLI {
                a {
                    font-size: 1.5em;
                }
            }

        }
    }
    // IPAD PRO
    @media screen and (min-width: 1024px) and (max-width: 1024px) and (max-height: 1367px) and (max-height: 1367px) {
        height: 14vh;
        .logo {
            min-width: 13%;
            position: relative;
            top: 1vh;
            left: 2vh;
        }

        .hamburger {
            top: 5vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;
            gap: 5vh;

            .navbarLI {
                a {
                    font-size: 2em;
                }
            }

        }
    }
    // IPAD
    @media screen and (min-width: 768px) and (max-width: 768px) and (max-height: 1025px) and (max-height: 1025px) {
        height: 14vh;
        .logo {
            min-width: 13%;
            position: relative;
            top: 1vh;
            left: 2vh;
        }

        .hamburger {
            top: 4.3vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;
            gap: 5vh;

        }
    }
    // IPHONE X
    @media screen and (min-width: 375px) and (max-width: 375px) and (max-height: 813px) and (max-height: 813px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .hamburger {
            top: 3.5vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // IPHONE 678 PLUS
    @media screen and (min-width: 414px) and (max-width: 414px) and (max-height: 737px) and (max-height: 737px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // IPHONE 678
    @media screen and (min-width: 375px) and (max-width: 375px) and (max-height: 668px) and (max-height: 668px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .hamburger {
            top: 3.5vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // IPHONE 5 SE
    @media screen and (min-width: 320px) and (max-width: 320px) and (max-height: 569px) and (max-height: 569px) {
        height: 15vh;
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .hamburger {
            top: 2.5vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // PIXEL 2 XL
    @media screen and (min-width: 411px) and (max-width: 411px) and (max-height: 824px) and (max-height: 824px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 1.5vh;
            left: 2vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // PIXEL 2
    @media screen and (min-width: 411px) and (max-width: 411px) and (max-height: 732px) and (max-height: 732px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 1.5vh;
            left: 2vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    // GALAXY S5 & MOTO G4
    @media screen and (min-width: 360px) and (max-width: 360px) and (max-height: 641px) and (max-height: 641px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 1vh;
            left: 2vh;
        }

        #navbarUL.hammenu {
            max-width: 75%;
            padding: 15vh 2vh 0 0;

        }
    }
    @media screen and (max-width: 1190px) {
        .logo {
            min-width: 25%;
            position: relative;
            top: 2vh;
            left: 2vh;
        }

        .headerBG {
            display: none;
        }

        #navbarUL {
            display: none;

        }

        .hamburger {
            display: block;
            z-index: 21;
        }
    }
`


export default Navbar
