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
  return (
    <div className="relative min-h-screen">
      <div>
        <Navbar/>
      </div>
      <div className="flex justify-center items-center">
        <Product />
      </div>
    </div>
  );
}
