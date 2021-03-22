import ReactDOM from 'react-dom';

import classes from './notification.module.css';

function Notification(props) {
    const { title, message, status } = props;

    const notifyClass =
        'flex justify-between items-center text-gray-100 items-center bg-gray-800 py-0 px-8 shadow fixed h-20 bottom-0 w-full left-0';

    const successClass = 'bg-green-400 text-gray-800';
    const errorClass = 'bg-red-400 text-gray-800';

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = successClass;
    }

    if (status === 'error') {
        statusClasses = errorClass;
    }

    const cssClasses = `${notifyClass} ${statusClasses}`;

    return ReactDOM.createPortal(
        <div className={cssClasses}>
            <h2 className='text-2xl m-0 font-bold'>{title}</h2>
            <p className='m-0 font-semibold'>{message}</p>
        </div>,
        document.getElementById('notifications')
    );
}

export default Notification;
