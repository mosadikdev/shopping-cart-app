import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { toast } from 'react-toastify';

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="p-4 bg-white shadow rounded-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() => {
                dispatch(addItem(product));
                toast.success(`${product.name} added to cart`);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
