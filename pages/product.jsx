import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
const Product = () => {
    const [productList, setProduct] = useState([]);
    const buttonRef = useRef();
    const router = useRouter();


    useEffect(() => {
        const getProducts = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/`);
            const products = await data.json();
            setProduct(products);
        }
        getProducts();
    }, []);

    const handleProductClick = (productId) => {
        router.push(`/details/${productId}`);
    };

    console.log(productList[0]);
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {

                productList.length > 0 ? (
                    productList.map(product => {
                        return (
                            <div
                                key={product.id}
                                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4' // Responsive widths + padding
                            >
                                <div className='border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all h-full flex flex-col'>
                                    <div className='p-4 flex-grow'>
                                        <div className='h-48 flex justify-center'>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className='h-full object-contain'
                                            />
                                        </div>
                                        <h2 className='text-lg font-semibold mt-4 line-clamp-2'>{product.title}</h2>
                                        <p className='text-gray-600 text-sm mt-2 line-clamp-3'>{product.description}</p>
                                    </div>
                                    <div className='p-4 border-t'>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-yellow-500'>★ {product.rating?.rate}</span>
                                            <span className='font-bold'>${product.price}</span>
                                        </div>
                                        <button
                                            onClick={() => handleProductClick(product.id)}
                                            className='w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                ) : (
                    <div>loading</div>
                )

            }
        </div >
    )
}

export default Product;

{/*
    <div key={`${product.id}`} className=' w-1/4 space-x-5 h-10'>
        <div>
            <img src={product.image} />
        </div>
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.rating.rate}</p>
            <p>{product.price}</p>
            <button onClick={() => handleProductClick(product.id)}
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>View Details
            </button>
        </div>
    </div>
*/}