import React from 'react'
import Navbar from '../../Components/Navbar'
import Searchbar from '../../Components/Searchbar'
import Header from '../../Components/Header'
import TopCategories from '../../Components/TopCategories'
import BestSellingProducts from '../../Components/BestSellingProducts'

const Home = () => {
    return (
        <>
            <Searchbar />
            <Header />
            <TopCategories />
            <BestSellingProducts/>
        </>
    )
}

export default Home