const ContactForm = () => {
  return (
    <section className='my-8 mx-auto rounded-md bg-gray-100 w-11/12 max-w-3xl p-4 shadow text-2xl'>
      <h1 className='text-3xl font-bold my-4 mx-0 text-center'>
        Kako Vam možemo pomoći?
      </h1>
      <form>
        <div className='flex gap-x-4 flex-wrap'>
          <div className='flex-1 min-w-min'>
            <label htmlFor='email' className='block font-medium mt-2 mx-0 mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              required
              className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
            />
          </div>
          <div className='flex-1 min-w-min'>
            <label htmlFor='name' className='block font-medium mt-2 mx-0 mb-1'>
              Ime
            </label>
            <input
              type='text'
              id='name'
              required
              className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
            />
          </div>
        </div>
        <div className='flex-1 min-w-min'>
          <label htmlFor='message' className='block font-medium mt-2 mx-0 mb-1'>
            Poruka
          </label>
          <textarea
            name=''
            id='message'
            rows='5'
            className='p-1 rounded w-full border-gray-400 border bg-gray-50 resize-none'
          ></textarea>
        </div>
        <div className='mt-4 text-right'>
          <button className='bg-gray-800 border border-gray-800 rounded text-gray-50 py-2 px-4 shadow hover:bg-gray-500 hover:border-gray-500'>
            Pošalji poruku
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
