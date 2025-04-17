import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' // Додали імпорт Link

export default function Home({ name }) {
  return (
    <>
      <Head>
        <title>{name} Page</title>
        <meta name="description" content="Ласкаво просимо на наш сайт!" />
        <meta name="keywords" content="головна, сайт, домашня сторінка" />
        <meta name="author" content="Miksnis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-[#111] text-[#fff] flex flex-col">
        <header className="w-full h-[15%] flex justify-center items-center">
          <h2 className="text-3xl font-bold text-center">{name} Page</h2>
        </header>

        <main className="w-full h-[85%] flex justify-around items-center px-4">
          <Card title="Home" />
          <Card title="About" href="/about" />
          <Card title="Contact" href="/contact" />
        </main>
      </div>
    </>
  );
}

function Card({ title, href }) {
  const content = (
    <article className="w-[300px] h-[200px] bg-[#222] flex justify-center items-center rounded-xl hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out shadow-2xl shadow-[#111] hover:shadow-[#222] active:shadow-[#333] active:scale-95 active:rotate-6 active:bg-[#444]">
      <h3 className="text-3xl font-bold text-center">{title}</h3>
    </article>
  );

  // Якщо є href — обгортаємо в <Link>
  return href ? <Link href={href}>{content}</Link> : content;
}

export async function getStaticProps() {
  return {
    props: {
      name: 'Home',
    },
  };
}
