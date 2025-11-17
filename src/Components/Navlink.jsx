
<div className="min-h-screen bg-gray-100 p-10">
  {/* Section Title */}
  <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
    Featured Products
  </h1>

  {/* Product Grid Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
    {/* Card 1 */}
    <div className="bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Product One</h2>
        <p className="text-gray-500 mt-2">$49.99</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product 2"
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Product Two</h2>
        <p className="text-gray-500 mt-2">$59.99</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product 3"
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Product Three</h2>
        <p className="text-gray-500 mt-2">$69.99</p>
      </div>
    </div>
  </div>
</div>

