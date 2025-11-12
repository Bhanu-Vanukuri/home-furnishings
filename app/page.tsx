import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Modern Sofa Set',
    category: 'Living Room',
    price: '$1,299',
    image: '/sofa.jpg',
  },
  {
    id: 2,
    name: 'King Size Bed',
    category: 'Bedroom',
    price: '$1,599',
    image: '/bed.jpg',
  },
  {
    id: 3,
    name: 'Dining Table Set',
    category: 'Dining',
    price: '$2,199',
    image: '/dining.jpg',
  },
  {
    id: 4,
    name: 'Outdoor Lounge Set',
    category: 'Outdoor',
    price: '$1,899',
    image: '/outdoor.jpg',
  },
];

const categories = [
  {
    name: 'Living Room',
    href: '/products/living-room',
    imageSrc: '/living-room.jpg',
  },
  {
    name: 'Bedroom',
    href: '/products/bedroom',
    imageSrc: '/bedroom.jpg',
  },
  {
    name: 'Dining',
    href: '/products/dining',
    imageSrc: '/dining-cat.jpg',
  },
  {
    name: 'Outdoor',
    href: '/products/outdoor',
    imageSrc: '/outdoor-cat.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space with Timeless Designs
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover handcrafted furniture that combines elegance, comfort, and functionality for every room in your home.
          </p>
          <div className="mt-10">
            <Link 
              href="/products" 
              className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <div className="w-full h-full bg-gray-200">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      {category.name} Image
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <a href={category.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {category.name}
                      </a>
                    </h3>
                    <a href={category.href} className="mt-1 text-sm text-blue-600 hover:text-blue-800">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <div className="w-full h-full bg-gray-200">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      {product.name} Image
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/products" className="inline-block bg-white border border-gray-300 py-3 px-8 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </div>
          <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {[
              {
                quote: "The quality of the furniture exceeded my expectations. It's both beautiful and comfortable.",
                author: 'Sarah Johnson',
                role: 'Homeowner',
              },
              {
                quote: "Excellent customer service and the delivery was right on time. Will definitely shop here again!",
                author: 'Michael Chen',
                role: 'Interior Designer',
              },
              {
                quote: "I love how the pieces I bought have transformed my living space. Great value for the price.",
                author: 'Emily Rodriguez',
                role: 'Customer',
              },
            ].map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-6xl text-gray-300 leading-none">"</div>
                <p className="mt-4 text-lg text-gray-600">{testimonial.quote}</p>
                <p className="mt-4 text-base font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your home?</span>
            <span className="block">Start shopping today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Sign up for our newsletter and get 10% off your first order.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Shop Now
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-200 bg-blue-800 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
