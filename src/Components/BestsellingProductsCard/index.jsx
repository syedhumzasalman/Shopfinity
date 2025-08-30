import React from "react";

const BestsellingProductsCard = ({ product }) => {

    const { title, price, image, category, description, rating } = product;

    // console.log(title);

    const rate = rating?.rate || 'No rating available';
    const count = rating?.count || 'No rating available';

    return (
        <>
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-gray-100">
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="h-48 object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="mt-4 space-y-2">
                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-green-600 transition">
                        {title}
                    </h2>
                    <p className="text-sm text-green-500 font-medium uppercase tracking-wide">
                        {category}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-extrabold text-green-600">
                        ${price}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                        ⭐ {rate}
                        <span className="text-gray-500">({count})</span>
                    </span>
                </div>

            </div>

        </>

    );
};

export default BestsellingProductsCard;
