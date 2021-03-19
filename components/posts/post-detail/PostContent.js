import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";

const DUMMY = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2021-03-18",
  content: "# Ovo je prvi članak",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY.slug}/${DUMMY.image}`;

  return (
    <article className='w-11/12 max-w-4xl my-8 mx-auto text-2xl bg-gray-100 rounded-md p-4'>
      <PostHeader title={DUMMY.title} image={imagePath} />
      <ReactMarkdown>{DUMMY.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
