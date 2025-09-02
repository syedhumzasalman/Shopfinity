import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BestsellingProductsCard from '../BestsellingProductsCard'
import { Link } from 'react-router-dom'


const BestSellingProducts = ({ showHeading = true, showButton = true }) => {

    const [product, setproduct] = useState([])


    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`)
            // console.log(response.data);
            setproduct([...response.data])
        } catch (error) {
            alert(error.message)
        }
    }



    // console.log(product);


    return (
        <>

            {showHeading && <h1 className='text-center font-extrabold text-3xl mt-10 mb-10'>Best Selling Products</h1>
            }



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {product.map((obj) => {
                    const { id, title, price, image, category, description, rating } = obj
                    // console.log(obj);

                    return (
                        <BestsellingProductsCard key={obj.id} product={obj} />
                    )
                })}
            </div>


            {showButton && <div className='flex justify-center mt-5 mb-5'>
                <Link to="/AllProducts">
                    <button className="w-50 mt-4 bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-700 transition">
                        View ALL Products
                    </button>
                </Link>

            </div>}



        </>
    )
}

export default BestSellingProducts