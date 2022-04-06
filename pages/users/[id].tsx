import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { IUser } from '../../interfaces/IUser';


interface ContactsProps {
  user: IUser;
}


export async function getServerSideProps({ params }: GetServerSidePropsContext<ParsedUrlQuery>) {
  if (!params) return { notFound: true };

  const { id } = params;
  const { data } = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);

  return { props: { user: data } };
}


export default function Contacts({ user }: ContactsProps): JSX.Element {
  const { id, name, email } = user;

  return (
    <>
      <h1>Contacts</h1>
      <div><b>id:</b> {id}</div>
      <div><b>name:</b> {name}</div>
      <div><b>email:</b> {email}</div>
    </>
  );
}
