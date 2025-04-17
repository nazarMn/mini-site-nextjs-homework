import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ title }) {
  return (
    <>
      <Head>
        <title>{title} Page</title>
        <meta name="description" content="Ласкаво просимо на наш сайт!" />
        <meta name="keywords" content="головна, сайт, домашня сторінка" />
        <meta name="author" content="Miksnis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-[#111] text-[#fff] flex flex-col">
        <header className="w-full h-[15%] flex justify-center items-center">
          <h2 className="text-3xl font-bold text-center">{title} Page</h2>
        </header>

        <main className="w-full h-[85%] flex justify-around items-center px-4">
          <Card title="Home" href="/home" imageSrc="https://img.icons8.com/ios-filled/100/ffffff/home.png" />
          <Card title="About" href="/about" imageSrc="https://img.icons8.com/ios-filled/100/ffffff/user.png" />
          <Card title="Contact" href="/contact" imageSrc="https://img.icons8.com/ios-filled/100/ffffff/phone.png" />
        </main>
      </div>
    </>
  );
}

function Card({ title, href, imageSrc }) {
  const content = (
    <article className="w-[300px] h-[250px] bg-[#222] flex flex-col justify-center items-center rounded-xl hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out shadow-2xl shadow-[#111] hover:shadow-[#222] active:shadow-[#333] active:scale-95 active:rotate-1 active:bg-[#444]">
      {imageSrc && (
        <div className="w-20 h-20 relative mb-4">
          <Image src={imageSrc} alt={`${title} icon`} layout="fill" objectFit="contain" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-center">{title}</h3>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  };
}
