import React from 'react';
import { BiSlideshow } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";


/**
 * Displayes all events (Assesment, Slide show etc. ) in the event
 * @param {*} param0 
 * @returns 
 */
const TimeTableEvents = ({ event} ) => {
    return (
        <div className='event-icons-container col'>
            <div className='container'>
                <div className='row'>
                {event.events?.map((item, index) => {
                    switch (item) {
                        case 'Assesment':
                            return (
                                <div key={index} className='col-sm'>
                                    <GiNotebook size={'20px'}/> 
                                </div>);
                        case 'slide':
                            return (
                                <div key={index} className='col-sm'>
                                    <BiSlideshow size={'20px'}/> 
                                </div>);
                        default: 
                            return <></>
                    }
                   
                })}
                </div>
            </div>
        </div>
    );
}

export default TimeTableEvents;