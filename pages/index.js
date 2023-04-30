import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className='h-screen flex flex-col items-center'>
      <div className="mt-48 max-w-none md:max-w-prose">
        <Head>
          <title>Samson Stannus</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='flex gap-4 justify-center items-center'>
            <Image
                key="profile"
                loader="imgix"
                priority
                src="/images/profile-close.jpg"
                className={"rounded-full"}
                height={150}
                width={150}
                alt="profile picture"
            />
            <h2 className='text-3xl font-bold'>
              Samson Stannus
            </h2>
          
        </main>

        <section className='mt-10'>
          <p className='text-xl'>
            &#128075; Hello I'm Samson. I am a Senior Machine Learning Engineer, who has built applications to serve model predictions in geo-spatial, financial, and advertisement domains. Welcome to my little corner of the internet!
          </p>
        </section>

        <section className='text-xl -mt-3'>
          <Link href={'/resume.pdf'}>Resume &rarr;</Link>
        </section>

        <section className='mt-6'>
          <h1>Blog</h1>
          <ul className='list-none'>
          {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link className="text-xl" href={`/posts/${id}`}>{title} &rarr;</Link>
                <br/>
                <Date dateString={date}/>               
              </li>
            ))}
          </ul>
        </section>

        <footer>
        </footer>
      </div>
    </div>
  )
}
