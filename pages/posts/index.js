import AllPosts from "../../components/posts/AllPosts"

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS je framework za React za produkciju',
        date: '2021-03-18',
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS je framework za React za produkciju',
        date: '2021-03-18',
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS je framework za React za produkciju',
        date: '2021-03-18',
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS je framework za React za produkciju',
        date: '2021-03-18',
    },
];

const AllPostsPage = () => {
    return (
        <AllPosts posts={DUMMY_POSTS}/>
    )
}

export default AllPostsPage
