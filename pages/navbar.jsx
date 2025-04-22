export let ime = 'Valentina';
import { useRouter } from 'next/router';
const Navbar = ({ currentValue, onValueChange }) => {
    const router = useRouter();
    return (
        <div className="flex items-center">
            <div>
                <h1 className="italic flex flex-row bg-gray-800 justify-end items-center w-full h-18 gap-7 pl-10 z-30 text-5xl">OnlineShop</h1>
            </div>
            <div className={`flex flex-row bg-gray-800 justify-end items-center w-full h-18 gap-7 pr-10 z-30 ${currentValue === 'login' || currentValue === 'cart' ? 'max-w-100vw' : 'max-w-[calc(100vw-17px)]'}`}>
                <h1 onClick={() => {router.push(`/`)}} id="home" className={`cursor-pointer ${currentValue === 'home' ? 'text-yellow-400 underline underline-offset-5 border-yellow-400' : 'text-white'}`}>Home</h1>
                <h1 onClick={() => {router.push(`/login`)}} id="login" className={`cursor-pointer ${currentValue === 'login' ? 'text-yellow-400 underline underline-offset-5 border-yellow-400' : 'text-white'}`}>Log in</h1>
                <h1 onClick={() => {router.push(`/cart`)}} id="cart" className={`cursor-pointer ${currentValue === 'cart' ? 'text-yellow-400 underline underline-offset-5 border-yellow-400' : 'text-white'}`}>Cart</h1>
                <h1 onClick={() => {router.push(`/aboutUs`)}} id="aboutUs" className={`cursor-pointer ${currentValue === 'aboutUs' ? 'text-yellow-400 underline underline-offset-5 border-yellow-400' : 'text-white'}`}>About us</h1>
            </div>
        </div>
    );
};

export default Navbar;