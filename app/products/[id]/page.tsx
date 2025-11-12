import { StarIcon } from '@heroicons/react/20/solid';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const product = {
  name: 'Modern Sofa Set',
  price: '$1,299',
  rating: 4.8,
  reviewCount: 24,
  description:
    'The Modern Sofa Set features clean lines, premium upholstery, and a comfortable design that complements any contemporary living space. Its sturdy wooden frame and high-density foam cushions ensure lasting comfort and durability.',
  highlights: [
    '100% premium fabric upholstery',
    'Solid wood frame construction',
    'Removable and washable covers',
    'High-density foam cushions',
    'Available in multiple colors',
    'Easy to assemble',
  ],
  details:
    'This 3-piece sofa set includes a 3-seater sofa and two matching armchairs. The sleek design features tapered wooden legs and plush cushions for both style and comfort. Perfect for modern living rooms, apartments, and lofts.',
  colors: [
    { name: 'Charcoal Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'Beige Linen', bgColor: 'bg-amber-200', selectedColor: 'ring-amber-200' },
    { name: 'Navy Blue', bgColor: 'bg-blue-900', selectedColor: 'ring-blue-900' },
  ],
  sizes: [
    { name: '3-Piece Set', inStock: true },
    { name: 'Sofa Only', inStock: true },
    { name: 'Armchair Only', inStock: true },
  ],
};

const reviews = {
  average: 4.8,
  totalCount: 24,
  featured: [
    {
      id: 1,
      title: 'Beautiful and Comfortable',
      rating: 5,
      content:
        'This sofa set has completely transformed our living room. The quality is outstanding and it\'s incredibly comfortable. We get compliments from everyone who visits!',
      author: 'Sarah Johnson',
      date: '2023-10-15',
      datetime: '2023-10-15',
    },
    {
      id: 2,
      title: 'Great Value for the Price',
      rating: 4,
      content:
        'I was hesitant about ordering furniture online, but I\'m so glad I took the chance. The assembly was straightforward and the quality is excellent for the price point.',
      author: 'Michael T.',
      date: '2023-10-02',
      datetime: '2023-10-02',
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetail() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    id="tabs-1-tab-1"
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    <span className="sr-only">Angled view</span>
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Image {i}</span>
                      </div>
                    </span>
                    <span
                      className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1">
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Main Product Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a href="#reviews" className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500">
                  {product.reviewCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <div className="flex items-center space-x-3 mt-2">
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex items-center">
                      <div className={`h-8 w-8 rounded-full ${color.bgColor} ring-2 ring-offset-2 ${color.selectedColor}`} />
                      <span className="ml-2 text-sm text-gray-700">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-600">Size</h3>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Size guide
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      className="w-full bg-white border border-gray-300 rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-900 sm:w-full"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <div className="group relative w-full py-6 flex justify-between items-center text-left">
                      <span className="text-gray-900 text-sm font-medium">Product Details</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </div>
                  </h3>
                  <div className="pb-6 prose prose-sm">
                    <p className="text-gray-500">{product.details}</p>
                  </div>
                </div>
                <div>
                  <h3>
                    <div className="group relative w-full py-6 flex justify-between items-center text-left">
                      <span className="text-gray-900 text-sm font-medium">Highlights</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </div>
                  </h3>
                  <div className="pb-6">
                    <ul role="list" className="list-disc pl-5 text-sm text-gray-500 space-y-2">
                      {product.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24" id="reviews">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
            <div className="mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10">
              {reviews.featured.map((review) => (
                <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                    <div className="flex items-center xl:col-span-1">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        {review.rating}
                        <span className="sr-only"> out of 5 stars</span>
                      </p>
                    </div>

                    <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                      <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                      <div className="mt-3 space-y-6 text-sm text-gray-500">
                        <p>{review.content}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                    <p className="font-medium text-gray-900">{review.author}</p>
                    <time
                      dateTime={review.datetime}
                      className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                    >
                      {review.date}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related products */}
        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            You may also like
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Related Product {product} Image</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Related Product {product}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">${(Math.random() * 1000 + 500).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
