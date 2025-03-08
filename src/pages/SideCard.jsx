import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

const SideCart = ({ item, closeCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!item) return null;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Calculate total price (removing commas and converting to number)
  const basePrice = parseFloat(item.price.replace(/[₹,]/g, ''));
  const totalPrice = basePrice * quantity;
  
  // Format price with commas
  const formattedTotalPrice = "₹" + totalPrice.toLocaleString('en-IN');

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-6">
        <button 
          onClick={closeCart}
          className="p-2 rounded-full hover:bg-gray-100 mr-2"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Product Details */}
        <div className="flex gap-4 border-b pb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={item.images}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            <p className="text-gray-500 text-sm mt-1">Size: M</p>
            <p className="font-semibold mt-1">{item.price}</p>
            
            <div className="flex items-center mt-3">
              <button 
                onClick={decreaseQuantity}
                className="w-8 h-8 flex items-center justify-center border rounded-full"
              >
                <Minus size={16} />
              </button>
              <span className="mx-3 w-8 text-center">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="w-8 h-8 flex items-center justify-center border rounded-full"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="border-b pb-6">
          <h4 className="font-medium mb-2">Product Details</h4>
          <p className="text-gray-600 text-sm">
            This premium vintage t-shirt is crafted from 100% organic cotton for maximum comfort. 
            Features a relaxed fit with a classic crew neck design. Perfect for everyday wear.
          </p>
        </div>

        {/* Order Summary */}
        <div className="border-b pb-6">
          <h4 className="font-medium mb-3">Order Summary</h4>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>{formattedTotalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span>₹99</span>
          </div>
          <div className="flex justify-between font-semibold mt-3">
            <span>Total</span>
            <span>₹{(totalPrice + 99).toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto pt-6">
        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2 mb-3">
          <ShoppingBag size={18} />
          Checkout
        </button>
        <button 
          onClick={closeCart}
          className="w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Continue Shopping
        </button>
        <button 
          onClick={closeCart}
          className="w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition mt-3"
        >
          Cancel 
        </button>
      </div>
    </div>
  );
};

export default SideCart;