import { Geist, Geist_Mono } from "next/font/google";
import { useState } from 'react';

import { ime } from './navbar';

import Navbar from './navbar';
import Product from './product';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [navValue, setNavValue] = useState("home");
  console.log(ime);
  const handlePageChange = () => {
    if (navValue === 'home') {
      setPage('banana');
    }
    else {
      setPage('home');
    }
  }
  return (
    <div className="container">
      <button onClick={() => { handlePageChange() }}>aaaaaa</button>
      <div>
        <Navbar
          currentValue={navValue}
          onValueChange={setNavValue}
        />
        <p>Current Nav Value: {navValue}</p>
      </div>
      <div className="flex justify-center items-center">
        {
          navValue === 'home' && <Product />
        }
      </div>
    </div>
  );
}
