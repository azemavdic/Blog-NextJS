import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/posts-util"


const AllPostsPage = (props) => {
    return (
        <AllPosts posts={props.allPosts}/>
    )
}

export const getStaticProps = async (ctx) => {
    const allPosts = getAllPosts()

    return {
        props:{
            allPosts
        }
    }
}

export default AllPostsPage
