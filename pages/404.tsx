import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function NotFound(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>404 page not found!</h1>
}
