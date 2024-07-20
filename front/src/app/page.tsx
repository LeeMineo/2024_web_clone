import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the home page!</h1>
        <p>This is the main content section of the page.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
