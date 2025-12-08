import React from "react";
import Searchbar from "../Searchbar";
import { useDispatch } from "react-redux";
import { addtoCard } from "../../Redux/Slices/ProductSlice";

const SingleProductPage = ({ product }) => {
    if (!product) return <p className="text-center mt-10">Loading...</p>;

    const { title, description, price, image, category, rating } = product;

    const rate = rating?.rate || 'No rating available';
    const count = rating?.count || 'No rating available';

    const dispatch = useDispatch()

    return (
        <>
            <Searchbar />

            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
                <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-10">

                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={image}
                            alt={title}
                            className="h-72 md:h-96 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="flex-1 space-y-5">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                            {title}
                        </h1>
                        <p className="text-sm text-green-600 uppercase font-medium tracking-wide">
                            {category}
                        </p>
                        <p className="text-gray-600 leading-relaxed">{description}</p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-3xl font-bold text-green-600">
                                ${price}
                            </span>
                            <span className="flex items-center gap-1 text-yellow-500 text-base font-medium">
                                ⭐ {rate}
                                <span className="text-gray-500 text-sm">({count} reviews)</span>
                            </span>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => dispatch(addtoCard(product))}
                                className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition">
                                🛒 Add to Cart
                            </button>
                            <button className="flex-1 border border-teal-500 text-teal-500 py-3 rounded-xl font-semibold hover:bg-teal-500 hover:text-white transition">
                                ❤️ Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;
