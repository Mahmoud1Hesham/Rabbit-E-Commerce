import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <Link key={index} to={`/product/${product._id}`} className="block">
                    <div className="w-full h-96 mb-4">
                        <img
                            src={product.images[0].url}
                            alt={product.images[0].altText || product.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-white py-4 rounded-lg shadow hover:drop-shadow-lg transition duration-300">
                        <h2 className="ml-5 text-lg font-semibold">{product.name}</h2>
                        <p className="ml-5 text-gray-600">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductGrid;
