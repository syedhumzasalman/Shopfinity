import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProductPage from '../../Components/SingleProductContent';

const ProductsDetails = () => {

    const params = useParams()
    // console.log("params", params);


    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        fetchSingleProduct()
    }, [])

    const fetchSingleProduct = async () => {

        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            setSingleProduct(response.data)
        } catch (error) {
            console.log(error.message);

        }
    }
    // console.log(singleProduct.data);

    return (
        <>

        <SingleProductPage product={singleProduct}/>



        </>
    )
}

export default ProductsDetails