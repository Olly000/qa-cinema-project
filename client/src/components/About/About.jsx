import React from 'react'
import { Container, Table, Button } from 'reactstrap';
import './About.css';
import leon from './img/Leon.jpg'
import kester from './img/kester.jpg'
import brendon from './img/brendon.jpg'
import olly from './img/olly.jpg'

function About() {
    return (
        <div className='centeredContent AboutBackground'>
            <div className='container'>
                <h2>About Us</h2>
                <p>We are a team of software developers who worked on this project together to add to our portfolios.</p>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className=" centeredContent img-container">
                            <a href="https://github.com/KesterJJ" target="_blank" rel="noreferrer">
                                Kester Jones
                            </a>
                        </div>
                        <div>
                        <img className='kester img' src={kester} alt="/" />
                        </div>
                        <div className="description-container">
                            <p> Based in London, Kester is full-stack developer who enjoys writing in his spare time.</p>
                        </div>
                </div>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className="centeredContent img-container">
                            <a href="https://github.com/Lucksray" target="_blank" rel="noreferrer">
                                Leon Cameron
                            </a>
                        </div>
                        <div>
                        <img className='leon img' src={leon} alt="/" />
                        </div>
                        <div className="description-container">
                            <p>Based in London, Leon is a full-stack developer who enjoys building and playing games on pc.</p>
                        </div>
                </div>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className="centeredContent img-container">
                            <a href="https://github.com/Olly000" target="_blank" rel="noreferrer">
                                Olly Stockman
                            </a>
                        </div>
                        <div>
                        <img className='olly img' src={olly} alt="/" />
                        </div>
                        <div className="description-container">
                            <p>Based in Scotland, Olly is full-stack developer who enjoys producing music.</p>
                        </div>
                </div>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className="centeredContent img-container">
                            <a href="https://github.com/BrendonWhitfield" target="_blank" rel="noreferrer">
                                Brendon Whitfield
                            </a>
                        </div>
                        <div>
                        <img className='brendon img' src={brendon} alt="/" />
                        </div>
                        <div className="description-container">
                            <p>Based in London, Brendon is a full-stack developer who enjoys many different sports.</p>
                        </div>
                </div>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className="img-container">
                            <a href="https://github.com/Muhamed-jakupovic7" target="_blank" rel="noreferrer">
                                Muhamed Jakupovic
                            </a>
                        </div>
                        <div>
                        <img className='olly img' src={olly} alt="/" />
                        </div>
                        <div className="description-container">
                            <p>Based in Scotland, Olly is full-stack developer who enjoys producing music.</p>
                        </div>
                </div>
                <div className="columnGapContainer">
                    <div className="venueContainer">
                        <div className="img-container">
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                Muhammed Rahmen
                            </a>
                        </div>
                        <div>
                        <img className='naym img' src={olly} alt="/" />
                        </div>
                        <div className="description-container">
                            <p>Based in Scotland, Olly is full-stack developer who enjoys producing music.</p>
                        </div>
                </div>
                </div>

                </div>
                <div align="center">
                        <Button id="infoButton" href="http://localhost:3000/contact" type="button">
                            If you wish to contact the team, please click here
                        </Button>
                    </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        

    );

}

export default About