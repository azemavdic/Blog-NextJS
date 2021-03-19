import Image from "next/image";

const PostHeader = (props) => {
  const { title, image } = props;

  return (
    <header className='pb-8 border-b-8 border-gray-500 my-4 mx-0 flex justify-between items-center gap-4'>
      <h1 className='text-5xl text-gray-500 m-0 text-center'>{title}</h1>
      <Image
        className='object-cover w-52 h-32'
        src={image}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
