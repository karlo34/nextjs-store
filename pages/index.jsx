import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <div className="flex justify-center items-center">
      <Product/>
    </div>
  );
}
