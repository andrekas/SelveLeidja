import React, { Component } from "react";
import './meist.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Meist</h2>
                <p id="Tutvustus">Antud lehekülg on loodud Tarkvaratehnika aine raames. Rakenduse eesmärgiks on
                                    koondada Tallinna selvepesulad ühte rakendusse. Mõnusat kasutamist!</p>
                <footer>
                    <p className="Autorid">Autorid:</p>
                    <p className="Autorid">Andre Laurimaa, Martin Amor, Mark Luik</p>
                </footer>
            </div>
        );
    }
}

export default Contact;