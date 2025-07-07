import React from 'react'

const selectedProduct={
    name: "Stylish Jacket",
    price: 120,
    OriginalPrice: 150,
    description: "This is a stylish Jacket perfect for any occasion",
    brand: "Fashion Brand",
    material: "Leather",
    sizes: ["S","M","L","XL"]
}

const ProductDetails = () => {
  return <>
  <div className="p-6">
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
            {/* Left Thumbnail */}
            <div className="hidden md:flex flex-col space-x-4 mr-6"></div>
        </div>
    </div>
  </div>

  </>
}

export default ProductDetails