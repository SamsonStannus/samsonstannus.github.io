import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import imgixLoader from '../lib/loader';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, name }) {
    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='mt-32 max-w-none md:max-w-prose'>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                </Head>
                <Image
                    priority
                    key="profile"
                    loader={imgixLoader}
                    src="/images/profile-close.jpg"
                    className={"rounded-full"}
                    height={120}
                    width={120}
                    alt=""
                />
                <div className="text-xl">{children}</div>
                <Link className="text-xl pb-10" href="/">&larr; back to home </Link>
            </div>
        </div>
    
       
    );
}