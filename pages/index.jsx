import { Geist, Geist_Mono } from "next/font/google";
import { useState } from 'react';

import Navbar from './navbar';
import Product from './product';
import LogIn from './login';
import Cart from './cart';
import AboutUs from './aboutUs';

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
  return (
    <div className="relative min-h-screen">
      <div>
        <Navbar
          currentValue={navValue}
          onValueChange={setNavValue}
        />
      </div>
      <div className="flex justify-center items-center">
        {navValue === 'home' && <Product />}
        {navValue === 'login' && <LogIn />}
        {navValue === 'cart' && <Cart />}
        {navValue === 'aboutUs' && <AboutUs />}
      </div>
    </div>
  );
}
