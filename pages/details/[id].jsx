import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


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
            <div className='w-full flex flex-col items-center text-center'>
                <h1>id: {id}</h1>
                <img src={product.image} width={300} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                {/* {product.rating && (
                    <p>Rating: {product.rating.rate}</p>
                )} */}
                <p>{product.rating?.rate}</p> {/*isto sta i gornji if*/}
                <p>{product.price}</p>
            </div>
        </div>

    )
};

export default Details;