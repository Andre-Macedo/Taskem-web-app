import React from 'react';
import moment from 'moment';
import taskNotCheck from '../assets/icons/taskNotCheck.svg';
import taskCheck from '../assets/icons/taskCheck.svg';

export const Task = props => {
    const { task, selectTask } = props;
    const { scheduledDate, endDate, name } = task;

    const getDateText = (endDt, scheduledDt) => {
        if (endDt) {
            return `Finished on: ${moment(endDt).format('MM/DD/yyyy')}`
        } else {
            return `Scheduled to: ${moment(scheduledDt).format('MM/DD/yyyy')}`
        }
    };

    return (
        <div className={'container-tasks ' + (endDate ? '' : 'active')} onClick={() => endDate ? null : selectTask(task)}>
            <img
                src={endDate ? taskCheck : taskNotCheck}
                alt={endDate ? 'Task finished' : 'Task not finished'} />
            <div>
                <p className={endDate ? 'finished' : ''}>{name}</p>
                <span>{getDateText(endDate, scheduledDate)}</span>
            </div>
        </div>
    );
};