import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>한율 클론</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">한율</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              베스트
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              제품
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              라인
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              브랜드
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-pink-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">피부 10층까지 1초컷 신속보습</h2>
            <p className="text-lg mb-8">100시간 지속되는 보습포만감</p>
            <button className="bg-black text-white py-2 px-4 rounded">MORE</button>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="/images/product1.jpg"
                alt="제품 이미지"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">NEW 어련쑥 클렌징 폼</h3>
              <p className="text-gray-500 mb-4">피부를 깨끗이 클렌징</p>
              <button className="bg-black text-white py-2 px-4 rounded">구매하기</button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="/images/product2.jpg"
                alt="제품 이미지"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">속부터 탄탄하게</h3>
              <p className="text-gray-500 mb-4">빠른 흡수로 탄탄한 피부</p>
              <button className="bg-black text-white py-2 px-4 rounded">구매하기</button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="/images/product3.jpg"
                alt="제품 이미지"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">NEW 어련쑥 크림</h3>
              <p className="text-gray-500 mb-4">피부 진정을 위한 크림</p>
              <button className="bg-black text-white py-2 px-4 rounded">구매하기</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">© 2024 한율. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
