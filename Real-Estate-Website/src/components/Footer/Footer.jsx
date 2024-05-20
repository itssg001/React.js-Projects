import React from 'react'
import './footer.css'
// import {logo2} from '.'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings f-container">
            {/* left-side  */}
            <div className="f-left">
                <img src="./logo2.png"  alt="Logo" />

                <span className="secondaryText">
                    Our Vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            {/* Right-side  */}

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span>145 New York, Fl 4571,USA</span>

                <div className="f-menu">
                    <span className='primaryText'>Property</span>
                    <span className='primaryText'>Services</span>
                    <span className='primaryText'>Product</span>
                    <span className='primaryText'>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
