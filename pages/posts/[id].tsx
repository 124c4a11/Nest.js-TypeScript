import axios from 'axios';
import { GetStaticPropsContext } from 'next';

import { IPost } from '../../interfaces/IPost';


interface PostProps {
  post: IPost
};


export async function getStaticPaths() {
  const { data } = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return { paths, fallback: false };
}


export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) return { notFound: true };

  const { id } = params;

  const { data } = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!data) return { notFound: true };

  return { props: { post: data } };
}


export default function Post({ post }: PostProps): JSX.Element {
  const { id, title, body } = post;
  return (
    <>
      <h1>{id} {title}</h1>
      <p>{body}</p>
    </>
  );
}
