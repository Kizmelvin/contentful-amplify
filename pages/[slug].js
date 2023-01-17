import Link from "next/link";
import { getAllPostsForHome } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const allPosts = await getAllPostsForHome();
  const data = allPosts.data.postCollection.items;
  const singlePost = data.find((post) => post.slug === slug);

  return {
    props: { singlePost, slug },
  };
}
export async function getStaticPaths() {
  const allPosts = await getAllPostsForHome();
  const data = allPosts.data.postCollection.items;
  const mSlug = data.map((r) => r.slug);
  const paths = mSlug.map((slg) => ({ params: { slug: slg.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

function SinglePost({ singlePost }) {
  return (
    <>
      <Link
        className="font-mono text-3xl font-bold p-10 mt-10"
        href={"/"}
      >{`<<Back`}</Link>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-6xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            {singlePost.title}
          </h1>
          <img src={singlePost.postImage.url} alt="post-img" />
          <p className="font-sans text-lg">
            {documentToReactComponents(singlePost.postBody.json)}
          </p>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
