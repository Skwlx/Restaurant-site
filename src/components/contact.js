import React from "react";
import "../styles/contact.scss"

const Contact = () => (
    <div className="contactContainer" id="contact">
        <div className="contact">
            <div className="contactAdress">
            <h3>Zapraszamy</h3>
                <ul>
                    <li><b>Adres:</b> Warszawa Lorem ipsum dolor sit amet.</li>
                    <li><b>Kontakt:</b> 123456789</li>
                </ul>
            </div>
            <div className="contactOpen">
                <h3>Jesteśmy otwarci:</h3>
                <p><b>Pon-pt</b></p>
                <p>9:00 - 22:00</p>
                <p><b>Weekend</b></p>
                <p>12:00 - 18:00</p>
                </div>
        </div>
    </div>
)

export default Contact;