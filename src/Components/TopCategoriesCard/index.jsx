import React from 'react'
import { Link } from 'react-router-dom';

const TopCategoriesCard = ({ category, image }) => {
    return (
        <Link to={`/categorie/${category}`}>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-blue-500 transition-all duration-300 mb-4 flex items-center justify-center bg-gray-50">
                    <img
                        src={image}
                        alt={category}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <p className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-blue-600 text-center">
                    {category}
                </p>
            </div>
        </Link>
    );
};

export default TopCategoriesCard