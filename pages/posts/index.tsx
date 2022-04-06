import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';

import { IPost } from '../../interfaces/IPost';


interface PostsProps {
  posts: IPost[];
}


export async function getStaticProps() {
  const { data } = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

  if (!data) return { notFound: true };

  return { props: { posts: data } };
}


const Posts: NextPage<PostsProps> = ({ posts }): JSX.Element => {
  return (
    <>
      <h1>Posts</h1>
      {
        posts.length
          ?
          <ul>
            {posts.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
          :
          <h2>List is empty.</h2>
      }
    </>
  );
};


export default Posts;
