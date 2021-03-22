import { useState, useEffect } from 'react';

import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Neuspješno slanje...');
    }
}

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    const sendMessageHandler = async (e) => {
        e.preventDefault();

        setRequestStatus('pending');

        try {
            await sendContactData({ email, name, message });
            setRequestStatus('success');
            setEmail('');
            setName('');
            setMessage('');
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }
    };

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Slanje poruke...',
            message: 'Vaša poruka se šalje',
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Poruka poslana!',
            message: 'Vaša poruka je uspješno poslana!',
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Neuspjelo slanje!',
            message:
                requestError ||
                'Došlo je do greške. Vaša poruka nije poslana poslana.',
        };
    }

    return (
        <section className='my-4 mx-auto rounded-md bg-gray-100 w-11/12 max-w-3xl p-4 shadow-md text-2xl'>
            <h1 className='text-3xl font-bold my-4 mx-0 text-center'>
                Kako Vam možemo pomoći?
            </h1>
            <form onSubmit={sendMessageHandler}>
                <div className='flex gap-x-4 flex-wrap'>
                    <div className='flex-1 min-w-min'>
                        <label
                            htmlFor='email'
                            className='block font-medium mt-2 mx-0 mb-1 text-xl'
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            id='email'
                            required
                            className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
                        />
                    </div>
                    <div className='flex-1 min-w-min'>
                        <label
                            htmlFor='name'
                            className='block font-medium mt-2 mx-0 mb-1 text-xl'
                        >
                            Ime
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            id='name'
                            required
                            className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
                        />
                    </div>
                </div>
                <div className='flex-1 min-w-min'>
                    <label
                        htmlFor='message'
                        className='block font-medium mt-2 mx-0 mb-1 text-xl'
                    >
                        Poruka
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        id='message'
                        rows='5'
                        className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
                    ></textarea>
                </div>
                <div className='mt-4 text-right'>
                    <button className='bg-gray-800 border border-gray-800 rounded text-gray-50 py-2 px-4 shadow hover:bg-gray-500 hover:border-gray-500 text-base'>
                        Pošalji poruku
                    </button>
                </div>
            </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    );
};

export default ContactForm;
