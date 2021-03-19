import PostsGrid from "../posts/PostsGrid"

const FeaturedPosts = (props) => {
    return (
        <section className='w-11/12 max-w-7xl my-8 mx-auto'>
            <h2 className='text-gray-800 text-3xl mb-3 font-bold text-center font-mono'>
                Istaknuti članci
            </h2>
            <PostsGrid posts={props.posts} />
        </section>
    );
}

export default FeaturedPosts
