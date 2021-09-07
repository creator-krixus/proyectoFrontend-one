import React from 'react'
import './Body.css';
import risco from '../../images/risco.png';

export default function Body() {
    return (
        <div className="Body">
            <section className="Body__info">
                <h1 className="Body__titulo">Top Reasons to<br /> come to Bali</h1>
                <p className="Body__parrafo">
                Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Sunt nihil exercitationem numquam aut optio?<br /> Ducimus 
                dolores soluta quam autem similique voluptas temporibus unde quasi, nesciunt<br />
                natus reiciendis expedita laboriosam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, <br />
                iure. Molestias quod porro molestiae quibusdam odit quaerat illo nihil,<br />
                dolore assumenda, nesciunt reiciendis sed explicabo laudantium at exercitationem<br />
                perferendis suscipit?
                </p>
                <button>Lear more</button>
            </section>
            <section>
                <img src={risco}/>
            </section>
        </div>
    )
}
