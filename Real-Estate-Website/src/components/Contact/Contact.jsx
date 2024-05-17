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
                <div className="row">
                    <div className="mode">
                        <div className="flexStart part-1">
                            <div className="icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="detail">
                                <span className='primaryText'>Call</span>
                                <span> 012 123 123 12</span>
                                
                            </div>
                        </div>
                        <div className="button">Call Now</div>
                    </div>
                    <div className="mode">
                        <div className="flexStart part-1">
                            <div className="icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="detail">
                                <span className='primaryText'>Chat</span>
                                <span> 012 123 123 12</span>
                                
                            </div>
                        </div>
                        <div className="button">Chat Now</div>
                    </div>
                    
                </div>
                {/* Second-Row  */}
                <div className="row">
                    <div className="mode">
                        <div className="flexStart part-1">
                            <div className="icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="detail">
                                <span className='primaryText'>Video Call</span>
                                <span> 012 123 123 12</span>
                                
                            </div>
                        </div>
                        <div className="button">Vedio Call Now</div>
                    </div>
                    <div className="mode">
                        <div className="flexStart part-1">
                            <div className="icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="detail">
                                <span className='primaryText'>Message</span>
                                <span> 012 123 123 12</span>
                                
                            </div>
                        </div>
                        <div className="button">Message Now</div>
                    </div>
                    
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