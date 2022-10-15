import React from 'react';

/**
 * Displays Summary for day view
 * @param {*} param0 
 * @returns 
 */
const ViewSummary = ({ event }) => {

    const onViewSummaryClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert(`clicked ${event.Subject}`);
    }


    return (<div className="col" onClick={onViewSummaryClick} >
        <p>View Summary</p>
    </div>)
}

export default ViewSummary;