import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Filters } from '../components/Filters';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { executeRequest } from '../services/api';

export const Home = props => {

    //List states
    const [tasks, setTasks] = useState([]);

    //Filters states
    const [periodStart, setPeriodStart] = useState('');
    const [periodEnd, setPeriodEnd] = useState('');
    const [status, setStatus] = useState(0);

    //State Modal view
    const [showModal, setShowModal] = useState(false);

    //Registration states
    const [error, setError] = useState('');
    const [taskName, setTaskName] = useState('');
    const [scheduledDate, setScheduledDate] = useState('')

    const getTaskWithFilter = async () => {
        try {

            let filters = '?status=' + status;

            if (periodStart) {
                filters += '&periodStart=' + periodStart;
            }

            if (periodEnd) {
                filters += '&periodEnd=' + periodEnd;
            }

            const result = await executeRequest('task' + filters, 'get')
            if (result && result.data) {
                setTasks(result.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const saveTask = async () => {
        try {
            if (!taskName || !scheduledDate) {
                setError('Please inform name and scheduled date')
                return;
            }

            const body = {
                name: taskName,
                scheduledDate: scheduledDate
            }

            await executeRequest('task', 'post', body);
            await getTaskWithFilter();
            setTaskName('');
            setScheduledDate('');
            setShowModal(false);

        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setError(e.response.data.erro);
            } else {
                setError('Not possible to register task.')
            }
        }
    }

    useEffect(() => {
        getTaskWithFilter()
    }, [status, periodStart, periodEnd])

    const logOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        props.setAccessToken();
    }

    return (
        <>
            <Header
                logOut={logOut}
                showModal={() => setShowModal(true)} />
            <Filters
                periodStart={periodStart}
                periodEnd={periodEnd}
                status={status}
                setPeriodStart={setPeriodStart}
                setPeriodEnd={setPeriodEnd}
                setStatus={setStatus}
            />
            <List tasks={tasks} getTaskWithFilter={getTaskWithFilter} />
            <Footer showModal={() => setShowModal(true)} />
            <Modal className='container-modal' show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <p>Add Task</p>
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
                </Modal.Body>
                <Modal.Footer>
                    <div className='buttons col-12'>
                        <button onClick={saveTask}>Save</button>
                        <span onClick={() => {
                            setShowModal(false)
                            setError('')
                            setTaskName('')
                            setScheduledDate('')
                        }}>Cancel</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}