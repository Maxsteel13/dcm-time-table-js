import * as React from 'react';
import ViewSummary from './View-summary';
import TimeTableJoinNow from './Time-table-join-now';
import TimeTableEvents from './Time-table-events';


/**
 * sets how to display day based events on the sj schedule day view component
 * @param {*} param0 
 * @returns 
 */
const TimeTableDayEvent = ({ event }) => {
    const currentTime = new Date();
    // determines if event is currently happening based on current time
    const isEventHappening = currentTime.getTime() >= event.StartTime.getTime() && currentTime.getTime() <= event.EndTime.getTime();

    console.log('event', event);
    return (
        <div className="template-wrap" style={{ background: event.SecondaryColor }}>   
            <div className='container'>   
                <div className="row">
                    <div className="col">
                    <p>Live Session</p>
                    </div>
                    {/* Subject */}
                    <div className="col">
                        <div className="subject" style={{ background: event.PrimaryColor }}>{event.Subject}</div>
                        <div className="time" style={{ background: event.PrimaryColor }}></div>
                    </div>
                    
                    {/* Time Table Items */}
                    <TimeTableEvents event={event} />
                    <div className="col">

                    {/* Teacher */}
                    <p>{event.teacher?.name}</p>
                    </div>

                    {/* Join Now */}
                    {isEventHappening ? <TimeTableJoinNow event={event}/> : <ViewSummary event={event} />}
                  
                </div>
            </div>  
        </div>);
}

export default TimeTableDayEvent;



