import React, { useState } from "react";
import { CreditCard, Wallet, Truck, Check, Rainbow, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    altPhone: "",
    email: "",
    address: "",
    landmark: "",
    pincode: ""
  });

  // Sample order data
  const orderData = {
    items: [
      { name: "Pride Vintage Tee // Rainbow", price: 999, quantity: 1 },
      { name: "Love Is Love Hoodie // Black", price: 1499, quantity: 1 }
    ],
    subtotal: 2498,
    shipping: 0,
    discount: 249, // 10% Pride discount
    total: 2249
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic would go here
    alert("Order placed successfully! Thank you for your purchase.");
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <Rainbow className="mr-2 text-pink-500" size={28} />
            <span>Checkout</span>
          </h1>
          <p className="text-gray-600 mt-2">Complete your purchase with pride</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`h-1 w-16 sm:w-24 ${activeStep >= 2 ? 'bg-pink-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className={`h-1 w-16 sm:w-24 ${activeStep >= 3 ? 'bg-pink-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-xs text-center w-24 sm:w-32">
              <span className={activeStep >= 1 ? "text-pink-600 font-medium" : "text-gray-500"}>
                Your Details
              </span>
            </div>
            <div className="text-xs text-center w-24 sm:w-32">
              <span className={activeStep >= 2 ? "text-pink-600 font-medium" : "text-gray-500"}>
                Payment Method
              </span>
            </div>
            <div className="text-xs text-center w-24 sm:w-32">
              <span className={activeStep >= 3 ? "text-pink-600 font-medium" : "text-gray-500"}>
                Confirmation
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Step 1: User Information */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <Heart className="mr-2 text-pink-500" size={20} />
                    <span>Your Information</span>
                  </h2>
                  <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Alternate Number (Optional)</label>
                        <input
                          type="tel"
                          name="altPhone"
                          value={formData.altPhone}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter alternate number"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    {/* Address Fields */}
                    <div className="flex flex-col">
                      <label className="font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                        placeholder="Enter your address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Landmark</label>
                        <input
                          type="text"
                          name="landmark"
                          value={formData.landmark}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter landmark"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter pincode"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 2: Payment Method */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <Wallet className="mr-2 text-pink-500" size={20} />
                    <span>Payment Method</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Credit/Debit Card */}
                    <div
                      className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        paymentMethod === "card"
                          ? "border-pink-500 bg-pink-50 shadow-md"
                          : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50"
                      }`}
                      onClick={() => handlePaymentMethodChange("card")}
                    >
                      <div className="flex items-center mb-3">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          checked={paymentMethod === "card"}
                          onChange={() => handlePaymentMethodChange("card")}
                          className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                        />
                        <label htmlFor="card" className="ml-2 font-medium text-gray-700">
                          Credit/Debit Card
                        </label>
                      </div>
                      <div className="flex justify-center mb-3">
                        <CreditCard size={40} className="text-pink-500" />
                      </div>
                      <p className="text-xs text-gray-500 text-center">
                        Pay securely with your card
                      </p>
                    </div>

                    {/* UPI */}
                    <div
                      className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        paymentMethod === "upi"
                          ? "border-pink-500 bg-pink-50 shadow-md"
                          : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50"
                      }`}
                      onClick={() => handlePaymentMethodChange("upi")}
                    >
                      <div className="flex items-center mb-3">
                        <input
                          type="radio"
                          id="upi"
                          name="paymentMethod"
                          checked={paymentMethod === "upi"}
                          onChange={() => handlePaymentMethodChange("upi")}
                          className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                        />
                        <label htmlFor="upi" className="ml-2 font-medium text-gray-700">
                          UPI
                        </label>
                      </div>
                      <div className="flex justify-center mb-3">
                        <Wallet size={40} className="text-pink-500" />
                      </div>
                      <p className="text-xs text-gray-500 text-center">
                        Pay instantly with UPI
                      </p>
                    </div>

                    {/* Cash on Delivery */}
                    <div
                      className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        paymentMethod === "cod"
                          ? "border-pink-500 bg-pink-50 shadow-md"
                          : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50"
                      }`}
                      onClick={() => handlePaymentMethodChange("cod")}
                    >
                      <div className="flex items-center mb-3">
                        <input
                          type="radio"
                          id="cod"
                          name="paymentMethod"
                          checked={paymentMethod === "cod"}
                          onChange={() => handlePaymentMethodChange("cod")}
                          className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                        />
                        <label htmlFor="cod" className="ml-2 font-medium text-gray-700">
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="flex justify-center mb-3">
                        <Truck size={40} className="text-pink-500" />
                      </div>
                      <p className="text-xs text-gray-500 text-center">
                        Pay when you receive
                      </p>
                    </div>
                  </div>

                  {/* Payment Details */}
                  {paymentMethod === "card" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4"
                    >
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">Name on Card</label>
                        <input
                          type="text"
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="Enter name as on card"
                        />
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "upi" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4"
                    >
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">UPI ID</label>
                        <input
                          type="text"
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition"
                          placeholder="yourname@upi"
                        />
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                        <p className="text-sm text-gray-700">
                          You will receive a payment request on your UPI app. Please complete the payment within 5 minutes.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "cod" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                        <p className="text-sm text-gray-700">
                          Pay with cash upon delivery. Please ensure you have the exact amount ready.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {activeStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <Check className="mr-2 text-pink-500" size={20} />
                    <span>Confirm Your Order</span>
                  </h2>

                  <div className="space-y-6">
                    {/* Shipping Information */}
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Shipping Information</h3>
                      <p className="text-gray-700">
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-gray-700">{formData.address}</p>
                      <p className="text-gray-700">
                        {formData.landmark && `${formData.landmark}, `}Pincode: {formData.pincode}
                      </p>
                      <p className="text-gray-700">Phone: {formData.phone}</p>
                      <p className="text-gray-700">Email: {formData.email}</p>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Payment Method</h3>
                      <p className="text-gray-700 flex items-center">
                        {paymentMethod === "card" && (
                          <>
                            <CreditCard size={18} className="mr-2 text-pink-500" />
                            Credit/Debit Card
                          </>
                        )}
                        {paymentMethod === "upi" && (
                          <>
                            <Wallet size={18} className="mr-2 text-pink-500" />
                            UPI
                          </>
                        )}
                        {paymentMethod === "cod" && (
                          <>
                            <Truck size={18} className="mr-2 text-pink-500" />
                            Cash on Delivery
                          </>
                        )}
                      </p>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-pink-500 focus:ring-pink-400"
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-pink-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-pink-600 hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className={`px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition ${
                    activeStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={activeStep === 1}
                >
                  Back
                </button>
                {activeStep < 3 ? (
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition flex items-center"
                  >
                    Continue
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Place Order
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Rainbow className="mr-2 text-pink-500" size={20} />
                  <span>Order Summary</span>
                </h2>

                {/* Order Items */}
                <div className="space-y-3 mb-6">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{item.name}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-gray-800">₹{item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-800">₹{orderData.subtotal.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-green-600">Free</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-pink-600 flex items-center">
                      <Rainbow size={16} className="mr-1" />
                      Pride Discount (10%)
                    </p>
                    <p className="text-pink-600">-₹{orderData.discount.toLocaleString()}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 font-bold">Total</p>
                  <p className="text-2xl font-bold text-gray-800">₹{orderData.total.toLocaleString()}</p>
                </div>

                {/* Pride Support Message */}
                <div className="mt-6 bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 flex items-center">
                    <Heart size={16} className="mr-2 text-pink-500" />
                    10% of your purchase supports LGBTQ+ youth organizations
                  </p>
                </div>

                {/* Secure Checkout */}
                <div className="mt-4 flex items-center justify-center text-gray-500 text-sm">
                  <ShieldCheck size={16} className="mr-1" />
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;