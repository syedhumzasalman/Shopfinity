import React, { useState } from 'react'
import Searchbar from '../../Components/Searchbar'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQty, removeAddtocard, decreaseQty } from '../../Redux/Slices/ProductSlice'


const AddtoCard = () => {


    const { addtocard } = useSelector(store => store.productReducer)
    const dispatch = useDispatch()
    // localStorage.setItem(addtocard)


    return (
        <>

            <Searchbar />
            <h1 className='text-center font-extrabold text-3xl mt-10 mb-10'>ADD TO CARD PRODUCTS</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
                {addtocard.length == 0 ? (
                    <h3 className='mt-40'>No Product added to cart</h3>
                ) : addtocard.map((obj) => {
                    const { id, title, price, image, category, description, rating, quantity } = obj
                    // console.log(quantity);

                    const rate = rating?.rate || 'No rating available';
                    const count = rating?.count || 'No rating available';

                    return (
                        <div key={id} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 border border-gray-100">
                            <div className="flex justify-center">
                                <img
                                    src={image}
                                    alt={title}
                                    className="h-40 sm:h-48 object-contain rounded-xl hover:scale-105 transition-transform duration-300 w-full"
                                />
                            </div>

                            <div className="mt-3 sm:mt-4 space-y-2">
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-2 hover:text-green-600 transition">
                                    {title}
                                </h2>
                                <p className="text-xs sm:text-sm text-green-500 font-medium uppercase tracking-wide">
                                    {category}
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                    {description}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between mt-3 sm:mt-4 gap-2">
                                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-600">
                                    ${quantity == 1 ? price : price * quantity }
                                </span>
                                <span className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm font-medium">
                                    ⭐ {rate}
                                    <span className="text-gray-500">({count})</span>
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-3">

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => dispatch(decreaseQty(id))}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold transition">
                                        -
                                    </button>

                                    <span className="text-lg font-semibold text-gray-800">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => dispatch(increaseQty(id))}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold transition">
                                        +
                                    </button>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => dispatch(removeAddtocard(id))}
                                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition w-full sm:w-auto">
                                    Delete
                                </button>

                            </div>

                        </div>
                    )
                })}
            </div >


        </>
    )
}

export default AddtoCard
