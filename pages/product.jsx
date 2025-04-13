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
                            <div key={`${product.id}`} className=' w-1/4'>
                                <div>
                                    <img src={product.image} />
                                </div>
                                <div>
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p>{product.rating.rate}</p>
                                    <p>{product.price}</p>
                                    <button
                                        onClick={() => handleProductClick(product.id)}
                                        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
                                        View Details
                                    </button>
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