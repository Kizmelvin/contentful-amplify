import Intro from "../components/intro";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Link from "next/link";

export default function Index({ preview, allPosts }) {
  const data = allPosts.data.postCollection.items;
  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Next.js Blog Example with Contenful</title>
        </Head>
        <div className="container mx-auto px-5">
          <Intro />
          <div className="flex justify-around">
            {data.map((cm) => (
              <Link key={cm.slug} href={`/${cm.slug}`}>
                <div className="max-w-md bg-white border border-gray-100 rounded-lg dark:bg-gray-600 dark:border-gray-500">
                  <img
                    className="rounded-t-lg w-90 "
                    src={`${cm.postImage.url}`}
                    alt="postAvatar"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {cm.title}
                    </h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
