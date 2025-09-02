import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BestsellingProductsCard from '../../Components/BestsellingProductsCard'

const SearchCategorie = () => {

    const { query } = useParams()

    const [queryproduct, setqueryProduct] = useState([])

    useEffect(() => {
        fetchcategoryApi()
    }, [query])



    const fetchcategoryApi = async () => {
        try {

            const response = await axios.get(`https://fakestoreapi.com/products`)

            const filterData = response.data.filter((item) => {
                const lowerQuery = query.toLowerCase()
                return (
                    item.title.toLowerCase().includes(lowerQuery) ||
                    item.description.toLowerCase().includes(lowerQuery)||
                    item.category.toLowerCase().includes(lowerQuery)
                )

            })

            setqueryProduct(filterData)
            // console.log(filterData);


        } catch (error) {
            alert(error.message)
        }
    }





    return (
        <>

            <div className="px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Showing results for <span className="text-teal-600">"{query}"</span>
                </h1>

                {queryproduct.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">No products found 😞</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {queryproduct.map((obj) => (
                            <BestsellingProductsCard key={obj.id} product={obj} />
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}

export default SearchCategorie