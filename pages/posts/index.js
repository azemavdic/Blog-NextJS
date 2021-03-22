import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/posts-util"
import Head from 'next/head'
import { Fragment } from "react"

const AllPostsPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Svi postovi</title>
                <meta name="description" content="Lista svih članaka"/>
            </Head>
            <AllPosts posts={props.allPosts} />
        </Fragment>
    );
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
