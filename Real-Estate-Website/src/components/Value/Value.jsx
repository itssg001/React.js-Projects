import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from "../../utils/accordion"
import { useState } from 'react';
import './value.css'
const Value = () => {
    const [className, setClassName] = useState();
  return (
    <section className="v-wraPPER">
        <div className="paddings v-container">
            {/* left-side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* right-side  */}
            <div className="v-right">
                <span className='orangeText'>Our value</span>
                <span className='primaryText'>Value we give to you</span>
                <span>We always ready top help you by providing the best services for you.
                <br />
                We beleive a good place to live can make life better.</span>

                <Accordion 
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                 {
                    data.map((item, i)=>{
                        return(
                            <AccordionItem key={i} className={`accordion ${className}`} uuid={i} >
                                <AccordionItemHeading>
                                <AccordionItemState>
                                    
                                    {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                </AccordionItemState>
                                        <AccordionItemButton className='accordionButton'>
                                            <div className="div icon">{item.icon}</div>
                                            <span className='heading'>
                                                {item.heading}
                                            </span>
                                            <div className="icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem> 
                        )
                    })
                 }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value