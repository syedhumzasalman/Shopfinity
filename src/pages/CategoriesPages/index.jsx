import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BestsellingProductsCard from '../../Components/BestsellingProductsCard'

const CategoriePage = () => {
  const param = useParams()
  const [categoryproduct, setCategoryProduct] = useState([])

  useEffect(() => {
    fetchcategoryApi()
  }, [param.categoryName])



  const fetchcategoryApi = async () => {
    try {

      const response = await axios.get(`https://fakestoreapi.com/products`)

      const filterData = response.data.filter((item) => item.category === param.categoryName.toLowerCase())

      // console.log(param.categoryName);
      // console.log(filterData);

      setCategoryProduct(filterData)

    } catch (error) {
      alert(error.message)
    }
  }


  return (
    <>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Showing results for <span className="text-teal-600">"{param.categoryName}"</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {categoryproduct.map((obj) => {
            const { id, title, price, image, category, description, rating } = obj

            return (
              <BestsellingProductsCard key={obj.id} product={obj} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CategoriePage
