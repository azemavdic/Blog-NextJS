import Link from 'next/link';
import Image from 'next/image';

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;

    const formatedDate = new Date(date).toLocaleDateString('sr-SR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className='shadow-lg bg-gray-800 text-center'>
            <Link href={linkPath}>
                <a className='text-gray-100'>
                    <div className='w-full max-h-80 overflow-hidden'>
                        <Image
                            className='object-cover'
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                    <div className='p-4'>
                        <h3 className='text-2xl my-2 mx-0'>{title}</h3>
                        <time className='italic text-gray-300'>
                            {formatedDate}
                        </time>
                        <p className='leading-6'>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
