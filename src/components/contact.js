import React from "react";
import "../styles/contact.scss"

const Contact = () => (
    <div className="contactContainer">
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
            <div className="contactMap">
            <iframe scrolling="no" marginheight="0" marginwidth="0"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Warszawa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0">
            </iframe>
            </div>
        </div>
    </div>
)

export default Contact;