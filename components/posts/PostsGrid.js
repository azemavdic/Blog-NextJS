import PostItem from './PostItem';

const PostsGrid = (props) => {
    const { posts } = props;
    return (
        <ul className='m-0 p-0 grid sm:grid-cols-2 md:grid-cols-3 gap-6 content-center grid-cols-1'>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    );
};

export default PostsGrid;
