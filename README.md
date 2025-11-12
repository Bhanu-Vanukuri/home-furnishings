# Luxe Haven - Home Furnishings Website

A modern, responsive e-commerce website for a home furnishings business built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices
- **Product Catalog**: Browse and filter products by category, price, and more
- **Product Details**: Detailed product pages with image galleries and specifications
- **Contact Form**: Easy way for customers to get in touch
- **About Us**: Company information and team members
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-furnishings
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Application routes and pages
  - `/products` - Product listing and detail pages
  - `/about` - About page
  - `/contact` - Contact page
- `/public` - Static assets (images, fonts, etc.)
- `/components` - Reusable UI components

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
- [Headless UI](https://headlessui.com/)
