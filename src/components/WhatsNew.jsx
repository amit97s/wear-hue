import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const WhatsNew = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const products = [
    {
      id: 1,
      name: "Pride Collection 2025",
      description: "Limited edition pride collection featuring vibrant colors and inclusive designs. Express yourself with confidence and style.",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      badge: "NEW ARRIVAL"
    },
    {
      id: 2,
      name: "Rainbow Essentials",
      description: "Everyday accessories with a colorful twist. Our rainbow essentials are perfect for showing your pride all year round.",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      badge: "TRENDING"
    },
    {
      id: 3,
      name: "Trans Flag Collection",
      description: "Celebrate trans visibility with our exclusive trans flag inspired collection. Beautiful designs that make a powerful statement.",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1585421514284-efb74320a966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      badge: "BEST SELLER"
    },
    {
      id: 4,
      name: "Pride Jewelry Line",
      description: "Elegant and meaningful jewelry pieces that celebrate love and diversity. Wear your pride with our handcrafted accessories.",
      price: "₹1,199",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      badge: "LIMITED EDITION"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef?.slickNext();
  };

  const prevSlide = () => {
    sliderRef?.slickPrev();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">New Arrivals</h2>
            <p className="text-gray-600 mt-1">Discover our latest pride-themed collections</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </button>
          </div>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <Slider ref={setSliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id} className="relative">
                <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/30 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold rounded-full mb-3">
                      {product.badge}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm md:text-base text-gray-200 mb-6 max-w-xl">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <span className="text-xl md:text-2xl font-bold">{product.price}</span>
                      <button className="flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        <ShoppingBag className="h-5 w-5" />
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Slider Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/20">
            <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 animate-slider-progress"></div>
          </div>
        </div>
        
        {/* Product Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {products.map((product, index) => (
            <button 
              key={product.id}
              onClick={() => sliderRef?.slickGoTo(index)}
              className="relative rounded-lg overflow-hidden aspect-square border-2 hover:border-purple-500 transition-all"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;