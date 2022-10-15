import React from "react";
import { getInitials } from "../../services/utils/name-utils";
import TimeTableWeekEvents from "./Time-table-week-events";

/**
 * sets how to display week based events on the sj schedule week view component
 * @param {*} param0 
 * @returns 
 */
const TimeTableWeekEvent = ({event}) => {
    var diff = Math.abs(event.EndTime.getTime() - event.StartTime.getTime());
    var minutes = Math.round(diff / 60000);

    if(minutes <= 30) {
        return (
            // if minutes is less than 30, it'll have less space to show
            <div className="week-template-wrap" style={{ background: event.DisplayColor }}>   
                <div className='container zero-padding'> 
                    <div className="row col-md-12 zero-padding">
                        {/* Subject */}
                        <div className="col-md-4">
                            <p className="float-left">{event.Subject}</p>
                        </div>
                        {/* Show event in 4 cols */}
                        <div className="col-md-4 zero-padding">
                             <TimeTableWeekEvents event={event} />
                        </div>
                        {/* Teacher */}
                        <div className="col-md-4 zero-padding">
                            <p className="float-right">{getInitials(event.Teacher.name)}</p>
                        </div>
                    </div>
                </div>
            </div>
            );

    } else {
    return (
        // take full space available for show event
        <div className="week-template-wrap" style={{ background: event.DisplayColor }}>   
            <div className='container zero-padding'> 
                <div className="row col-md-12 zero-padding">
                    {/* Subject */}
                    <div className="col-md-6">
                        <p className="float-left">{event.Subject}</p>
                    </div>
                    {/* Teacher */}
                    <div className="col-md-6 zero-padding">
                        <p className="float-right">{getInitials(event.Teacher.name)}</p>
                    </div>
                </div>
                {/* Take full size to show event data */}
                <div className="row col-md-12 zero-padding">
                    <TimeTableWeekEvents event={event} />
                </div>
            </div>
        </div>
        );
    }
}

export default TimeTableWeekEvent;