import React from 'react';
import { BiSlideshow } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";

/**
 * Displayes all events (Assesment, Slide show etc. ) in the event for week view
 * @param {*} param0 
 * @returns 
 */
const TimeTableWeekEvents = ({ event} ) => {
    return (
        <div className='event-icons-container col-md-12 zero-padding'>
            <div className='container'>
                <div className='row float-right'>
                {event.Events?.map((item, index) => {
                    switch (item) {
                        case 'Assesment':
                            return (
                                <div key={index} className='col-xs float-right'>
                                    <GiNotebook size={'16px'}/> 
                                </div>);
                        case 'slide':
                            return (
                                <div key={index} className='col-xs float-right'>
                                    <BiSlideshow size={'16px'}/> 
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

export default TimeTableWeekEvents;