import React from 'react';
import addTask from '../assets/icons/addTask.svg'

export const Footer = props => {
    const { showModal } = props;
    return (
        <div className='container-footer'>
            <button onClick={showModal}>
                <img src={addTask} alt='Add task' />
                Add Task
            </button>
            <span>@Copyright {new Date().getFullYear()} Andre M. All rights reserved.</span>
        </div>
    )
}