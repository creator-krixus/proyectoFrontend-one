import React from 'react';
import './Header.css';
import Body from '../../components/body/Body'
import Cards from '../../components/cards/Cards';

export default function Header() {
    return (
        <div className="Header">
            <nav className="Header__nav">
                <ul className="Header__lista">
                    <a href="Home" className="Header__lista-items">Home</a>
                    <a href="Explore" className="Header__lista-items">Explore</a>
                    <a href="Gallery" className="Header__lista-items">Gallery</a>
                    <a href="Contact" className="Header__lista-items">Contact</a>
                </ul>
            </nav>
            <p className="Header__textos">Your next favorite<br />destination.</p>
            <p className="Header__textos-describe">Get the best out of a trip to Bali</p>
            <button className="Header__btn">Book a Trip</button>
            <Body /> 
            <Cards />
        </div>
    )
}
