import axios from 'axios';

import { ITodo } from '../interfaces/ITodo';


interface TodoesProps {
  todoes: ITodo[];
}


export async function getStaticProps() {
  const { data } = await axios.get<ITodo>('http://localhost:3000/api/todoes');

  if (!data) return { notFound: true };

  return { props: { todoes: data } };
};


export default function Todoes({ todoes }: TodoesProps): JSX.Element {
  return (
    <>
      <h1>Todoes</h1>
      {
        todoes.length
          ?
          <ul>
            {todoes.map(({ id, title }) => (
              <li key={id}>{id}. {title}</li>
            ))}
          </ul>
          :
          <h2>List is empty.</h2>
      }
    </>
  );
};
