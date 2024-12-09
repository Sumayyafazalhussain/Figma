export default function Subpr() {
  const products = [
      { 
          id: 1, 
          title: "Syltherine", 
          description: "Stylish cafe chair", 
          price: "Rp 2.500.000", 
          discount: "-30%", 
          img: "p1.jpg" 
      },
      { 
          id: 2, 
          title: "Leviosa", 
          description: "Comfortable cafe chair", 
          price: "Rp 2.800.000", 
          discount: "-20%", 
          img: "p2.5.jpg" 
      },
      { 
          id: 3, 
          title: "Lolito", 
          description: "Luxury big sofa", 
          price: "Rp 7.000.000", 
          discount: "-50%", 
          img: "p2.jpg" 
      },
      { 
          id: 4, 
          title: "Respira", 
          description: "Outdoor bar table and stool", 
          price: "Rp 500.000", 
          discount: "New", 
          img: "p3.jpg" 
      },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {Array(4).fill(products).flat().map((product, index) => (
              <div 
                  key={index} 
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                  {/* Product Image */}
                  <img 
                      src={product.img} 
                      alt={product.description} 
                      className="w-full h-48 object-cover" 
                  />
                  
                  {/* Discount Badge */}
                  <span
                      className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${
                          product.discount === "New" ? "bg-green-500" : "bg-red-500"
                      }`}
                  >
                      {product.discount}
                  </span>
                  
                  {/* Product Details */}
                  <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <p className="text-lg font-bold text-gray-900 mt-2">{product.price}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center px-4 py-3">
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-md hover:bg-primary-dark focus:outline-none">
                          Add to Cart
                      </button>
                      <div className="flex space-x-2">
                          <button 
                              className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary-dark focus:outline-none" 
                              aria-label="Share"
                          >
                              Share
                          </button>
                          <button 
                              className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary-dark focus:outline-none" 
                              aria-label="Compare"
                          >
                              Compare
                          </button>
                          <button 
                              className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary-dark focus:outline-none" 
                              aria-label="Like"
                          >
                              Like
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );
}