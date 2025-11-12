import Link from 'next/link';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'living-room', label: 'Living Room', checked: false },
      { value: 'bedroom', label: 'Bedroom', checked: false },
      { value: 'dining', label: 'Dining', checked: false },
      { value: 'outdoor', label: 'Outdoor', checked: false },
      { value: 'office', label: 'Office', checked: false },
      { value: 'decor', label: 'Decor', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-500', label: 'Under $500', checked: false },
      { value: '500-1000', label: '$500 - $1000', checked: false },
      { value: '1000-2000', label: '$1000 - $2000', checked: false },
      { value: '2000+', label: '$2000+', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'gray', label: 'Gray', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
    ],
  },
  {
    id: 'material',
    name: 'Material',
    options: [
      { value: 'wood', label: 'Wood', checked: false },
      { value: 'fabric', label: 'Fabric', checked: false },
      { value: 'leather', label: 'Leather', checked: false },
      { value: 'metal', label: 'Metal', checked: false },
      { value: 'glass', label: 'Glass', checked: false },
      { value: 'rattan', label: 'Rattan', checked: false },
    ],
  },
];

const products = [
  {
    id: 1,
    name: 'Modern Sofa Set',
    category: 'Living Room',
    price: '$1,299',
    rating: 4.8,
    reviewCount: 24,
    image: '/sofa.jpg',
    colors: ['gray', 'beige', 'navy'],
    materials: ['fabric', 'wood'],
  },
  {
    id: 2,
    name: 'King Size Bed',
    category: 'Bedroom',
    price: '$1,599',
    rating: 4.9,
    reviewCount: 18,
    image: '/bed.jpg',
    colors: ['white', 'black', 'brown'],
    materials: ['wood', 'fabric'],
  },
  {
    id: 3,
    name: 'Dining Table Set',
    category: 'Dining',
    price: '$2,199',
    rating: 4.7,
    reviewCount: 15,
    image: '/dining.jpg',
    colors: ['brown', 'black'],
    materials: ['wood', 'metal'],
  },
  {
    id: 4,
    name: 'Outdoor Lounge Set',
    category: 'Outdoor',
    price: '$1,899',
    rating: 4.6,
    reviewCount: 12,
    image: '/outdoor.jpg',
    colors: ['gray', 'beige', 'blue'],
    materials: ['rattan', 'fabric'],
  },
  {
    id: 5,
    name: 'Executive Desk',
    category: 'Office',
    price: '$899',
    rating: 4.5,
    reviewCount: 8,
    image: '/desk.jpg',
    colors: ['black', 'brown', 'white'],
    materials: ['wood', 'metal'],
  },
  {
    id: 6,
    name: 'Accent Chair',
    category: 'Living Room',
    price: '$349',
    rating: 4.7,
    reviewCount: 22,
    image: '/chair.jpg',
    colors: ['blue', 'gray', 'beige'],
    materials: ['fabric', 'wood', 'metal'],
  },
  {
    id: 7,
    name: 'Coffee Table',
    category: 'Living Room',
    price: '$599',
    rating: 4.4,
    reviewCount: 14,
    image: '/coffee-table.jpg',
    colors: ['brown', 'black', 'white'],
    materials: ['wood', 'glass', 'metal'],
  },
  {
    id: 8,
    name: 'Bookshelf',
    category: 'Office',
    price: '$499',
    rating: 4.6,
    reviewCount: 9,
    image: '/bookshelf.jpg',
    colors: ['brown', 'black', 'white'],
    materials: ['wood', 'metal'],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Products() {
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <div className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">All Products</h1>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Sort
                    <svg
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">Products</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <div key={section.id} className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <div className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                      </div>
                    </h3>
                    <div className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">{product.name} Image</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <Link href={`/products/${product.id}`}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <svg
                                key={rating}
                                className={classNames(
                                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              {product.reviewCount} reviews
                            </span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <div className="mt-4">
                        <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <nav
                  className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-10"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                      <span className="font-medium">32</span> results
                    </p>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
