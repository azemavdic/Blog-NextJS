import Image from "next/image";
import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <Image
            src={`/images/posts/${post.slug}/${image.url}`}
            alt={image.alt}
            width={600}
            height={300}
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className='w-11/12 max-w-4xl my-8 mx-auto text-2xl bg-gray-100 rounded-md p-4'>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers} className='prose'>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
