import React from 'react'
import './Body.css';
import risco from '../../images/risco.png';

export default function Body() {
    return (
        <div className="Body">
            <section className="Body__info">
                <h1 className="Body__titulo">Top Reasons to<br /> come to Bali</h1>
                <p className="Body__parrafo">
                Lorem ipsum dolor sit, amet consectetur <br />
                adipisicing elit. Sunt nihil exercitationem <br />numquam aut optio? Ducimus <br />
                dolores quaerat soluta quam  quaerat<br /> similique voluptas temporibus unde quasi, <br />
                natus reiciendis quaerat adipisicing<br /> expedita laboriosam.
                Lorem ipsum dolor sit <br />consectetur, adipisicing elit. Soluta, <br />
                iure. Molestias quod porro molestiae<br /> quibusdam odit quaerat illo nihil.<br />
                quibusdam odit quaerat illo nihil
                </p>
                <button className="Body__btn">Lear more</button>
            </section>
            <section className="Body__section">
                <img src={risco} alt="Risco" className="Body__section-img"/>
            </section>
        </div>
    )
}
