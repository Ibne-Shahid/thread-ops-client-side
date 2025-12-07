import React from 'react'

const Card = ({product}) => {

  return (
    <div
            
            className="card w-full max-w-xs bg-base-100 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
            <figure className="relative overflow-hidden rounded-t-lg">
              <img
                src={product.images[0]}
                alt={product.productName}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
            </figure>

            <div className="card-body p-5 space-y-3">
              <h2 className="card-title text-xl font-semibold text-gray-800">
                {product.productName}
              </h2>

              <p className="text-sm text-gray-500">{product.category}</p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-green-600">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400">
                  Stock: {product.availableQuantity}
                </span>
              </div>

              <div className="card-actions flex justify-end pt-2">
                <button className="btn btn-primary text-white rounded-lg w-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
  )
}

export default Card