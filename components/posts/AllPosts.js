import PostsGrid from './PostsGrid';

const AllPosts = (props) => {
    return (
        <section className='w-11/12 max-w-5xl my-8 mx-auto'>
            <h1 className='text-3xl text-gray-800 text-center'>Svi članci</h1>
            <PostsGrid posts={props.posts} />
        </section>
    );
};

export default AllPosts;
