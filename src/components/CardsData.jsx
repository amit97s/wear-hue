import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  Rainbow,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SideCart = ({ item, closeCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate price (removing non-numeric characters and converting to number)
  const basePrice = parseInt(item.price.replace(/[^\d]/g, ""));
  const totalPrice = basePrice * quantity;

  // Format price with commas
  const formattedTotalPrice = "₹" + totalPrice.toLocaleString("en-IN");

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Rainbow className="mr-2 text-pink-500" size={24} />
          <span>Your Cart</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-pink-50 rounded-lg p-4 mb-6">
          <div className="flex gap-4">
            <img
              src={item.images}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">Size: M (Default)</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">{item.price}</p>
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 py-1 bg-white hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 py-1 bg-white hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            🌈 Pride Discount Applied!
          </h3>
          <p className="text-sm text-gray-600">
            10% of your purchase supports LGBTQ+ youth organizations.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-auto">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">{formattedTotalPrice}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="text-gray-800 font-bold">Total</span>
          <span className="font-bold text-lg">{formattedTotalPrice}</span>
        </div>

        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-medium hover:opacity-90 transition mb-3">
          Checkout Now
        </button>
        <button
          onClick={closeCart}
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const CardsData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [wishlist, setWishlist] = useState([]);

  // Generate more product data for pagination demo
  const generateMoreProducts = () => {
    const baseProducts = [
      {
        id: 1,
        name: "Pride Vintage Tee // Rainbow",
        price: "₹999",
        images:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        tag: "Pride Collection",
      },
      {
        id: 2,
        name: "Love Is Love Hoodie // Black",
        price: "₹1,499",
        images:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tag: "Bestseller",
      },
      {
        id: 3,
        name: "Equality Crop Top // White",
        price: "₹799",
        images:
          "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        tag: "New Arrival",
      },
      {
        id: 4,
        name: "Trans Rights Tee // Blue",
        price: "₹899",
        images:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        tag: "Limited Edition",
      },
      {
        id: 5,
        name: "Queer & Proud Sweatshirt // Pink",
        price: "₹1,299",
        images:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
        tag: "Trending",
      },
      {
        id: 6,
        name: "Inclusive Denim Jacket // Washed",
        price: "₹1,999",
        images:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
        tag: "Premium",
      },
      {
        id: 7,
        name: "Rainbow Cap // Multicolor",
        price: "₹599",
        images:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
        tag: "Accessories",
      },
      {
        id: 8,
        name: "Ally Tote Bag // Canvas",
        price: "₹499",
        images:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        tag: "Eco-friendly",
      },
    ];

    // Create an expanded list by repeating the base products
    const expandedProducts = [];
    for (let i = 0; i < 5; i++) {
      baseProducts.forEach((product) => {
        expandedProducts.push({
          ...product,
          id: expandedProducts.length + 1,
          name: `${product.name} ${i > 0 ? `(${i + 1})` : ""}`,
        });
      });
    }

    return expandedProducts;
  };

  const allProducts = generateMoreProducts();

  // Try Also Products
  const tryAlsoData = [
    {
      id: 101,
      name: "Pride Month Special Edition Tee",
      price: "₹1,299",
      images:
        "https://images.unsplash.com/photo-1575310866542-7c89c9aca2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      tag: "Limited Edition",
    },
    {
      id: 102,
      name: "Inclusive Graphic Hoodie",
      price: "₹1,599",
      images:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      tag: "Bestseller",
    },
    {
      id: 103,
      name: "Rainbow Socks Bundle",
      price: "₹699",
      images:
        "https://images.unsplash.com/photo-1563000215-e31a8ddcb2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      tag: "Gift Idea",
    },
  ];

  // Sort products based on selected option
  const sortProducts = (products) => {
    const productsCopy = [...products];

    switch (sortOption) {
      case "price-low-high":
        return productsCopy.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
          return priceA - priceB;
        });
      case "price-high-low":
        return productsCopy.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
          return priceB - priceA;
        });
      case "new-arrivals":
        // For demo purposes, we'll just shuffle the array
        return productsCopy.sort(() => Math.random() - 0.5);
      case "trending":
        // For demo purposes, we'll just reverse the array
        return productsCopy.reverse();
      default:
        return productsCopy;
    }
  };

  const sortedProducts = sortProducts(allProducts);

  // Get current products for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsFilterOpen(false);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const toggleWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter((id) => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show a subset of pages with current page in the middle if possible
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = startPage + maxPagesToShow - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis indicators
      if (startPage > 1) {
        pageNumbers.unshift("...");
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  // Get sort option display text
  const getSortOptionText = () => {
    switch (sortOption) {
      case "price-low-high":
        return "Price: Low to High";
      case "price-high-low":
        return "Price: High to Low";
      case "new-arrivals":
        return "New Arrivals";
      case "trending":
        return "Trending";
      default:
        return "Sort By";
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="flex justify-center py-10 relative">
        <div className="w-full max-w-[1280px] px-4 md:px-6">
          {/* Pride Month Banner */}
          <div className="mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-lg p-4 md:p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Pride Month Collection 🌈
                </h2>
                <p className="text-sm md:text-base opacity-90">
                  Celebrate love, equality, and self-expression with our exclusive collection
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-white text-pink-500 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition shadow-md">
                Shop Collection
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 flex items-center">
              <Rainbow className="mr-2 text-pink-500" size={24} />
              <span>New Arrivals</span>
            </h2>

            {/* Filter Section */}
            <div className="relative">
              <button
                onClick={toggleFilter}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition border border-pink-200"
              >
                <Filter size={18} className="text-pink-500" />
                <span>{getSortOptionText()}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform text-pink-500 ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Filter Dropdown */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10"
                  >
                    <div className="py-2">
                      <button
                        onClick={() => handleSortChange("price-low-high")}
                        className={`w-full text-left px-4 py-2 hover:bg-pink-50 transition ${
                          sortOption === "price-low-high"
                            ? "font-semibold bg-pink-50 text-pink-600"
                            : ""
                        }`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => handleSortChange("price-high-low")}
                        className={`w-full text-left px-4 py-2 hover:bg-pink-50 transition ${
                          sortOption === "price-high-low"
                            ? "font-semibold bg-pink-50 text-pink-600"
                            : ""
                        }`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => handleSortChange("new-arrivals")}
                        className={`w-full text-left px-4 py-2 hover:bg-pink-50 transition ${
                          sortOption === "new-arrivals"
                            ? "font-semibold bg-pink-50 text-pink-600"
                            : ""
                        }`}
                      >
                        New Arrivals
                      </button>
                      <button
                        onClick={() => handleSortChange("trending")}
                        className={`w-full text-left px-4 py-2 hover:bg-pink-50 transition ${
                          sortOption === "trending"
                            ? "font-semibold bg-pink-50 text-pink-600"
                            : ""
                        }`}
                      >
                        Trending
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 relative group"
              >
                {/* Product Tag */}
                {item.tag && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-full h-72 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Wishlist and Cart Icons */}
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition"
                    >
                      <Heart
                        className={`${
                          wishlist.includes(item.id)
                            ? "fill-pink-500 text-pink-500"
                            : "text-gray-600 hover:text-pink-500"
                        }`}
                        size={18}
                      />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart
                        className="text-gray-600 hover:text-pink-500"
                        size={18}
                      />
                    </button>
                  </div>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mb-6 bg-white text-pink-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-50 transition transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <p className="text-sm text-pink-600 font-medium">{item.tag}</p>
                  <h3 className="text-md text-gray-800 font-medium mt-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {item.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-3 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-full mr-2 ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-pink-100"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {getPageNumbers().map((page, index) =>
                  typeof page === "number" ? (
                    <button
                      key={index}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentPage === page
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                          : "text-gray-700 hover:bg-pink-100"
                      }`}
                    >
                      {page}
                    </button>
                  ) : (
                    <span
                      key={index}
                      className="w-10 h-10 flex items-center justify-center text-gray-500"
                    >
                      {page}
                    </span>
                  )
                )}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-full ml-2 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-pink-100"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>

          {/* You Can Also Try Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Rainbow className="mr-2 text-pink-500" size={24} />
              <span>You Might Also Love</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tryAlsoData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 relative group"
                >
                  {/* Product Tag */}
                  {item.tag && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.images}
                      alt={item.name}
                      className="w-full h-80 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Wishlist and Cart Icons */}
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition"
                      >
                        <Heart
                          className={`${
                            wishlist.includes(item.id)
                              ? "fill-pink-500 text-pink-500"
                              : "text-gray-600 hover:text-pink-500"
                          }`}
                          size={18}
                        />
                      </button>
                      <button
                        className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart
                          className="text-gray-600 hover:text-pink-500"
                          size={18}
                        />
                      </button>
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mb-6 bg-white text-pink-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-50 transition transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <p className="text-sm text-pink-600 font-medium">{item.tag}</p>
                    <h3 className="text-md text-gray-800 font-medium mt-1">
                      {item.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {item.price}
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-3 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Support Banner */}
          <div className="mt-12 mb-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Supporting Our Community
                </h3>
                <p className="text-gray-700">
                  10% of all purchases go directly to LGBTQ+ youth organizations
                </p>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when cart is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      {/* Sliding Cart */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full bg-white shadow-2xl z-50 w-full md:w-[450px] overflow-y-auto"
          >
            <div className="p-5 h-full">
              <button
                onClick={closeCart}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>
              {selectedItem && (
                <SideCart item={selectedItem} closeCart={closeCart} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardsData;