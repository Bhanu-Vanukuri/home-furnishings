import Image from 'next/image';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    imageUrl: '/team/sarah.jpg',
    bio: 'With over 15 years of experience in interior design, Sarah founded Luxe Haven to bring beautiful, high-quality furniture to homes everywhere.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    imageUrl: '/team/michael.jpg',
    bio: 'Michael oversees our design team, ensuring every piece meets our high standards of quality and style.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Experience',
    imageUrl: '/team/emily.jpg',
    bio: 'Emily leads our customer service team, dedicated to providing exceptional support throughout your shopping experience.',
  },
  {
    name: 'David Kim',
    role: 'Operations Manager',
    imageUrl: '/team/david.jpg',
    bio: 'David ensures our operations run smoothly, from inventory management to timely deliveries.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Crafting beautiful spaces with quality furniture that stands the test of time.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                A Passion for Quality and Design
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2020, Luxe Haven began with a simple mission: to provide beautifully crafted, high-quality furniture that combines timeless design with everyday functionality.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Our Showroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Guiding principles that shape everything we do.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Quality Craftsmanship',
                  description:
                    'We source and create furniture using the finest materials and time-honored techniques to ensure lasting beauty and durability.',
                  icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                },
                {
                  name: 'Sustainable Practices',
                  description:
                    'Committed to sustainability, we use eco-friendly materials and responsible manufacturing processes to minimize our environmental impact.',
                  icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
                },
                {
                  name: 'Customer Satisfaction',
                  description:
                    'Your satisfaction is our top priority. We go above and beyond to ensure you love your purchase and shopping experience.',
                  icon: 'M4.5 12.75l6 6 9-13.5',
                },
              ].map((value) => (
                <div key={value.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
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
                          strokeWidth={2}
                          d={value.icon}
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {value.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-500">
                A talented group of individuals passionate about bringing beautiful furniture to your home.
              </p>
            </div>
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
              {team.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <div className="aspect-w-3 aspect-h-2">
                      <div className="h-48 w-48 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500">{person.name[0]}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your space?</span>
            <span className="block">Visit our showroom today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Experience the quality and craftsmanship of our furniture in person.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
