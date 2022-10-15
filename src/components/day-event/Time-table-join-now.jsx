import React from 'react';


/**
 * Shows the join now event on day view
 * @param {} param0 
 * @returns 
 */
const TimeTableJoinNow = ({ event }) => {

    const onJoinNowClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert(`Join Now ${event.Subject}`);
    }


    return (<div className="col" onClick={onJoinNowClick} >
        <p>Join Now</p>
    </div>)
}

export default TimeTableJoinNow;