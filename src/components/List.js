import React, { useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import noTaskImg from '../assets/icons/noTaskImage.svg'
import { Task } from './Task';
import { executeRequest } from '../services/api';

export const List = props => {
    const { tasks, getTaskWithFilter } = props;

    const [showModal, setShowModal] = useState(false);

    const [error, setError] = useState('');
    const [taskName, setTaskName] = useState('');
    const [taskId, setTaskId] = useState(null)
    const [scheduledDate, setScheduledDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const selectTask = task => {
        setError('');
        setTaskId(task.id);
        setTaskName(task.name);
        setScheduledDate(moment(task.scheduledDate).format('MM/DD/yyyy'));
        setEndDate(task.endDate);
        setShowModal(true);

    }

    const updateTask = async () => {
        try {
            if (!taskName || !scheduledDate) {
                setError('Please inform name and scheduled date')
                return;
            }

            const body = {
                name: taskName,
                scheduledDate: scheduledDate,
                endDate: endDate
            }

            await executeRequest('task/' + taskId, 'put', body);
            await getTaskWithFilter();
            setTaskName('');
            setScheduledDate('');
            setEndDate('');
            setTaskId(null);
            setShowModal(false);

        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setError(e.response.data.erro);
            } else {
                setError('Not possible to update task.')
            }
        }
    }

    const deleteTask = async () => {

        try {
            if (!taskId) {
                setError('Please inform name and scheduled date');
                return;
            }

            await executeRequest('task/'+taskId, 'delete');
            await getTaskWithFilter();
            setTaskName('');
            setScheduledDate('');
            setEndDate('');
            setTaskId(null)
            setShowModal(false);

        } catch (e) {
            if (e?.response?.data?.erro) {
                setError(e.response.data.erro);
            } else {
                setError('Not possible to delete task.')
            }
        }
    }



    return (
        <>
            <div className={'container-list ' + (tasks && tasks.length > 0 ? '' : 'empty')}>
                {tasks && tasks.length > 0 ?

                    tasks?.map(task => <Task task={task} key={task.id} selectTask={selectTask} />)
                    :
                    <>
                        <img src={noTaskImg} alt='No tasks found' />
                        <p>You don't have any tasks yet</p>
                    </>
                }
            </div>
            <Modal className='container-modal' show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <p>Edit Task</p>
                    {error && <p className='error'>{error}</p>}
                    <input className='col-12' type='text' name='name'
                        placeholder='Task name'
                        value={taskName}
                        onChange={event => setTaskName(event.target.value)} />
                    <input className='col-12' type='text' name='scheduledDate'
                        placeholder='Task scheduled date:'
                        value={scheduledDate}
                        onChange={event => setScheduledDate(event.target.value)}
                        onFocus={event => event.target.type = 'date'}
                        onBlur={event => scheduledDate ? event.target.type = 'date' : event.target.type = 'text'}

                    />
                    <input className='col-12' type='text' name='endDate'
                        placeholder='Task end date:'
                        value={endDate}
                        onChange={event => setEndDate(event.target.value)}
                        onFocus={event => event.target.type = 'date'}
                        onBlur={event => scheduledDate ? event.target.type = 'date' : event.target.type = 'text'}

                    />
                </Modal.Body>
                <Modal.Footer>
                    <div className='buttons col-12'>
                        <button onClick={updateTask}>Save</button>
                        <span onClick={deleteTask}>Delete</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}