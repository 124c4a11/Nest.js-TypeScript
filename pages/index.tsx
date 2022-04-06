import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

import { IUser } from '../interfaces/IUser'


interface HomeProps {
  users: IUser[];
}


interface StaticProps {
  notFound?: boolean;
  props?: HomeProps;
}


export async function getStaticProps(): Promise<StaticProps> {
  const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

  if (!data) { notFound: true };

  return { props: { users: data } };
}


export default function Home({ users }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      {
        users.length
          ?
          <ul>
            {users.map(({ id, name }) => (
              <li key={id}>
                <Link href={`/users/${id}`}>{`${id} ${name}`}</Link>
              </li>
            ))}
          </ul>
          :
          <h2>List is empty.</h2>
      }
    </>
  );
}
