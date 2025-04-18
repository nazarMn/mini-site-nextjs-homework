import React from 'react';
import Head from 'next/head';

export default function Contact({ title, developer }) {
  return (
    <div className="w-screen h-screen bg-[#111] text-[#fff] flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Зв'яжіться з нами" />
        <meta name="keywords" content="контакти, пошта, лінкедін" />
        <meta name="author" content={developer} />
        <link rel="icon" href="../Hacker-1.svg" />
      </Head>

      <header className="w-full h-[15%] flex justify-center items-center border-b border-gray-700">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
      </header>

      <main className="w-full h-[85%] flex flex-col justify-center items-center px-4 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold">Nazarii Markiv</h3>
          <p className="text-gray-400">Web Developer | React / Node / MongoDB</p>
        </div>

        <div className="space-y-2 text-center">
          <p><span className="font-semibold text-white">Email:</span> nazarMn2008@gmail.com</p>
          <p><span className="font-semibold text-white">Location:</span> Shklo, Ukraine</p>
        </div>

        <div className="flex space-x-6 text-xl mt-4">
          <a href="https://github.com/nazarMn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            GitHub
          </a>
        
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact Page',
      developer: 'Miksnis',
    },
  };
}
