import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import details from '@/styles/details.module.css';

function Details() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                if (!id) return;
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    console.error('Bad response');
                    return;
                }
                const data = await response.json();
                setProduct(data);
            }
            catch (error) {
                console.error('Fetch failed:', error);
            }

        }
        getProduct();

    }, [id])



    return (
        <div className='container flex justify-center'>
            <div className='w-1/4 flex flex-col items-center text-center'>
                <h1>id: {id}</h1>
                <img src={product.image}/>
                <h1 className={details.naslov}>{product.title}</h1>
                <p>{product.description}</p>
                {/* {product.rating && (
                    <p>Rating: {product.rating.rate}</p>
                )} */}
                <p>{product.rating?.rate}</p> {/*isto sta i gornji if*/}
                <p>{product.price}</p>
                <button>Add to cart</button>
            </div>
        </div>

    )
};

export default Details;