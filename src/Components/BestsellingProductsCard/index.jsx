import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addtoCard } from "../../Redux/Slices/ProductSlice";

const BestsellingProductsCard = ({ product }) => {

    const { id, title, price, image, category, description, rating } = product;

    // console.log(image);

    const rate = rating?.rate || 'No rating available';
    const count = rating?.count || 'No rating available';

    const dispatch = useDispatch()

    return (
        <>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 border border-gray-100">
                <Link to={`/AllProducts/${id}`}>
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
                            ${price}
                        </span>
                        <span className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm font-medium">
                            ⭐ {rate}
                            <span className="text-gray-500">({count})</span>
                        </span>
                    </div>
                </Link>
                <button
                    onClick={() => dispatch(addtoCard(product))}
                    className="
                   w-full mt-4
                   bg-green-600 hover:bg-green-700 
                   text-white font-semibold
                   py-2.5 rounded-xl
                   shadow-md hover:shadow-lg
                   transition-all duration-300
                   flex items-center justify-center gap-2
    "
                >
                    🛒 Add to Cart
                </button>
            </div>


        </>

    );
};

export default BestsellingProductsCard;
