import React from 'react'
import './Cards.css';
/*Hacemos la instatlacion de fontawesome y sus dependencias
con este comando y luego hacemos las importacion 
npm i --save @fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
@fortawesome/free-brands-svg-icons*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faStopwatch, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'

export default function Cards() {
    return (
        <div className="Card">
            <section className="Card__one">
                <div className="one">
                    <FontAwesomeIcon icon={faSun} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo">Time</h3>
                </div>
            </section>
            <section className="Card__two">
                <div className="one">
                    <FontAwesomeIcon icon={faStopwatch} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo-two">Watched</h3>
                </div>
            </section>
            <section className="Card__three">
                <div className="one">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo-three">Currency</h3>
                </div>
            </section>
        </div>
    )
}
