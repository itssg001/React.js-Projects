import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const 
conact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings c-container">
            {/* left-side  */}
            <div className="c-left">
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptatem distinctio nam accusamus quo excepturi in eligendi odio ipsam fugiat quasi enim numquam, illum quibusdam dolor quis recusandae. Architecto, iste?</span>
            
            <div className="contactModes">
                {/* first-row  */}
                <div className="firstRow">
                    <div className="mode">
                        <div className="flexStart">
                            <div className="icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="detail">
                                <span>Call</span>
                                <span> 012 123 123 12</span>
                                
                            </div>
                        </div>
                    </div>
                    <div className="button">Call Now</div>
                </div>
            </div>
            
            </div>

            {/* right-side  */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default 
conact