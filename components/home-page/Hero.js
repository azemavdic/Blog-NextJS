import Image from 'next/image'

const Hero = () => {
    return (
        <section className='text-center bg-gradient-to-b from-gray-900 to-gray-700 py-8 px-0 sm:w-full'>
            <div className='w-80 h-80 m-auto shadow-md rounded-full overflow-hidden bg-gray-700'>
                <Image
                    className='object-cover object-top w-full h-full'
                    src='/images/site/kimi.jpg'
                    alt='profilna slika'
                    width={400}
                    height={400}
                />
            </div>
            <h1 className='sm:text-6xl text-4xl font-bold text-gray-300 my-4 mx-0'>
                Selam, ja sam Kimi
            </h1>
            <p className='sm:text-2xl text-xl text-gray-200 w-11/12 max-w-2xl m-auto'>Radim svašta i znam svašta</p>
        </section>
    );
}

export default Hero
