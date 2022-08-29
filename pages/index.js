import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return {
    props: {
      posts
    },
  };
};

export default function Home({posts}) {
  return (
    <div className="main_container">
      
      <Head>
        <title>
          IntroNext | Početna
        </title>
      </Head>

      <section>
        <h2>Blog</h2>
        <ul>
          {
            posts.map((post) => (
              <li key={post.id}>
                <Link href={'/posts/' + post.id}>{post.title}</Link> <br /> {post.date}
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
