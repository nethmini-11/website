import React, { useEffect, useState } from "react";
import { productData } from "../data/products";
import ProductCard from "../components/products/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); 

  useEffect(() => {
    setProducts(productData);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <section id="call" className="section call-to-action">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Discover Your Perfect Ride
          </h2>
          <p className="text-lg text-center text-gray-600 mt-4">
            Whether you are commuting through the city or conquering rugged
            trails, we have the perfect bike for every adventure. Experience the
            best of cycling with JourneyBikes.
          </p>

          <div className="flex justify-center mt-6">
            <input
              type="text"
              placeholder="Search bikes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                speed={product.speed}
                price={product.price}
                features={product.features}
                buttonText={product.buttonText}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <nav className="inline-flex -space-x-px">
              {Array.from({
                length: Math.ceil(filteredProducts.length / productsPerPage),
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
