import React from 'react'
import './Footer.css'
import playa from '../../images/playa1.png';

export default function Footer() {
    return (
        <div className="Footer">
            <section className="Footer__img">
                <img src={playa} alt="hotel" className="Footer__hotel"/>
            </section>
            <section className="Footer__texto">
                <h1 className="Footer__texto-titulo">Special Island</h1>
                <p className="Footer__texto-parrafo">Lorem ipsum dolor sit amet consectetur<br />
                adipisicing elit. Aspernatur impedit ratione reprehenderit<br />
                veritatis quibusdam aut dolorem! Velit accusantium <br />
                sed, nulla, quo placeat possimus natus sint<br />
                reiciendis nam labore laboriosam cum?</p>
                <p className="Footer__texto-parrafo">Lorem ipsum dolor sit amet consectetur<br />
                adipisicing elit. Aspernatur impedit ratione reprehenderit<br />
                veritatis quibusdam aut dolorem! Velit accusantium <br />
                sed, nulla, quo placeat possimus natus sint<br />
                reiciendis nam labore laboriosam cum?</p>
                <button className="Footer__texto-btn">Lear More</button>
            </section>
            
        </div>
    )
}
