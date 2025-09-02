import React from 'react'
import BestSellingProducts from '../../Components/BestSellingProducts'
import Searchbar from '../../Components/Searchbar'

const AllProducts = () => {
  return (
    <>

    <Searchbar/>

    <div className='mt-10'>
        <BestSellingProducts showHeading = {false} showButton = {false}  />
    </div>
    
    </>
  )
}

export default AllProducts