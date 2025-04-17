

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#111] text-[#fff] flex flex-col">
    <header className="w-[100%] h-[15%] flex justify-center items-center"><h2 className="text-3xl font-bold text-center">Home page</h2></header>

  <main className="w-[100%] h-[85%] flex justify-around items-center">
      <article className="w-[300px] h-[200px] bg-[#222] flex justify-center items-center rounded-xl hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out shadow-2xl shadow-[#111] hover:shadow-2xl hover:shadow-[#222] active:shadow-2xl active:shadow-[#333] active:scale-95 active:rotate-6 active:duration-300 active:ease-in-out active:transition-all active:bg-[#444]"><h3 className="text-3xl font-bold text-center">Home</h3></article>
      <article className="w-[300px] h-[200px] bg-[#222] flex justify-center items-center rounded-xl hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out shadow-2xl shadow-[#111] hover:shadow-2xl hover:shadow-[#222] active:shadow-2xl active:shadow-[#333] active:scale-95 active:rotate-6 active:duration-300 active:ease-in-out active:transition-all active:bg-[#444]"><h3 className="text-3xl font-bold text-center">About</h3></article>
      <article className="w-[300px] h-[200px] bg-[#222] flex justify-center items-center rounded-xl hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out shadow-2xl shadow-[#111] hover:shadow-2xl hover:shadow-[#222] active:shadow-2xl active:shadow-[#333] active:scale-95 active:rotate-6 active:duration-300 active:ease-in-out active:transition-all active:bg-[#444]"><h3 className="text-3xl font-bold text-center">Contact</h3></article>
  </main>
    
  </div>
   
  );
}
