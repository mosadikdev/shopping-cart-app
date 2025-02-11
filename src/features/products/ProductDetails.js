import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id.toString() === id)
  );

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-700 my-4">{product.description}</p>
      <p className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => {
            dispatch(addItem(product));
            toast.success(`${product.name} added to cart`);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
