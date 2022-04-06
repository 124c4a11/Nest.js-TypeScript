import Link from 'next/link';
import { useRouter } from 'next/router';


interface NavigationItem {
  id: number;
  title: string;
  path: string;
}


const navigation: NavigationItem[] = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 4, title: 'Todoes', path: '/todoes' },
];


export function Navbar(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul>
      {navigation.map(({ id, title, path }) => (
        <li key={id}>
          <Link href={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
