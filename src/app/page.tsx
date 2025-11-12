import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Funki Monki Logo"
              width={120}
              height={120}
              className="h-30 w-30 object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Funki Monki
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our unique collection of fun and funky home furnishings
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}