import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from 'next/head'

const HomePage = (props) => {
  const { featuredPosts } = props;
  return (
    <Fragment>
      <Head>
        <title>Moj blog</title>
        <meta name="description" content="Mog blog gdje pišem članke"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
};

export const getStaticProps = async (ctx) => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
};

export default HomePage;
