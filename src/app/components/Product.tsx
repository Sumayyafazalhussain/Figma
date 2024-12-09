import Image from "next/image";

export const Product = () => {
  const products = [
    { id: 1, img: "/p1.jpg", title: "Syltherine", description: "Stylish cafe chair", oldPrice: "Rp 3,500.000", newPrice: "Rp 2,500.000", discount: "-30%" },
    { id: 2, img: "/p2.5.jpg", title: "Leviosa", description: "Stylish cafe chair", oldPrice: null, newPrice: "Rp 2,500.000" },
    { id: 3, img: "/p2.jpg", title: "Lolito", description: "Luxury big sofa", oldPrice: "Rp 14,000.000", newPrice: "Rp 7,000.000", discount: "-50%" },
    { id: 4, img: "/p3.jpg", title: "Respira", description: "Outdoor bar table and stool", oldPrice: null, newPrice: "Rp 500.000", discount: "New" },
    { id: 5, img: "/p4.jpg", title: "Grifo", description: "Night lamp", oldPrice: null, newPrice: "Rp 1,500.000" },
    { id: 6, img: "/p5.jpg", title: "Muggo", description: "Small mug", oldPrice: null, newPrice: "Rp 150.000", discount: "New" },
    { id: 7, img: "/p6.jpg", title: "Lagro", description: "Cute bed set", oldPrice: "Rp 14,000.000", newPrice: "Rp 7,000.000", discount: "-50%" },
    { id: 8, img: "/p7.jpg", title: "Sereno", description: "Minimalist flower pot", oldPrice: null, newPrice: "Rp 500.000", discount: "New" },
  ];

  return (
    <div className="ml-[150px] mt-[100px]">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-center">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center"
          >
            {/* Product Image */}
            <div className="flex justify-center items-center h-[250px]"> {/* Increased height */}
              <Image
                src={product.img}
                alt={product.title}
                width={200}
                height={200}
                className="w-auto h-full object-contain"
              />
            </div>

            {/* Overlay Add to Cart Button */}
            {index === 1 || index === 3 ? ( // Show Add to Cart for 2nd and 4th items
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-[#DB4444] text-white px-4 py-2 rounded-lg">Add to Cart</button>
              </div>
            ) : null}

            {/* Discount/Badge */}
            {product.discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                {product.discount}
              </div>
            )}

            {/* Product Details */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              {product.oldPrice && <p className="text-gray-500 line-through">{product.oldPrice}</p>}
              <p className="text-[#DB4444] font-bold">{product.newPrice}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#DB4444] text-white px-6 py-2 rounded-lg hover:bg-red-600">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Product;