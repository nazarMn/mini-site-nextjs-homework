import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <div className="w-screen h-screen bg-[#111] text-[#fff] flex flex-col">
           <Head>
        <title>About Page</title>
        <meta name="description" content="Дізнайтеся більше про нас" />
        <meta name="keywords" content="про нас, інформація, розробник" />
        <meta name="author" content="Miksnis" />
      </Head>
        
      <header className="w-full h-[15%] flex justify-center items-center border-b border-gray-700">
        <h2 className="text-3xl font-bold text-center">About Page</h2>
      </header>

      <main className="w-full h-[85%] flex justify-center items-center px-6">
        <div className="max-w-2xl text-center space-y-6">
          <h3 className="text-2xl font-semibold">Hi, I’m Nazarii Markiv</h3>
          <p className="text-gray-400 text-lg">
            I'm a passionate web developer based in Ukraine. I specialize in creating modern, responsive, and user-friendly applications using technologies like <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">MongoDB</span>.
          </p>
          <p className="text-gray-400 text-lg">
            In my free time, I love exploring new tech, building creative projects, and diving into detective novels. I’m also a fan of classical jazz and enjoy learning languages!
          </p>
          <p className="text-gray-500 text-sm italic">
            "Code is like a poem — it has to follow certain rhythm and structure to be truly elegant."
          </p>
        </div>
      </main>
    </div>
  );
}
