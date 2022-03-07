import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import Auth from '../layouts/Auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('auth/login');
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Auth>{page}</Auth>;
};
