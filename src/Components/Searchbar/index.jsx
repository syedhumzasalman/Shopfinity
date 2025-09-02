import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {

    const navigate = useNavigate()


    const [searchInput, setSearchInput] = useState("")

    // console.log(searchInput);




    return (
        <>

            <div className="bg-white border-b">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/shopfinity.png"
                            alt="Logo"
                            className="h-10 md:h-12"
                        />
                    </div>

                    {/* Search Bar */}
                    <div className="flex w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search by product name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />

                        <button onClick={() => {
                            if (searchInput !== "") {
                                navigate(`/Search/${searchInput}`)
                            } else {
                                alert("Please enter a product name!");
                            }
                        }}
                            className="bg-teal-700 text-white px-4 rounded-r-md hover:bg-teal-800 transition">
                            🔍
                        </button>
                    </div>

                    {/* Tagline */}
                    <div className="text-lg font-semibold text-teal-700 whitespace-nowrap">
                        Wholesale <span className="text-orange-500">Prices</span> Rozana
                    </div>
                </div>
            </div>


        </>
    )
}

export default Searchbar