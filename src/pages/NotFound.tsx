import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Kaizen & Coffee</title>
        <meta name="description" content="The page you're looking for could not be found. Head back to Kaizen & Coffee's homepage to keep exploring." />
      </Helmet>
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-brown mb-4">Page not found</p>
      <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none text-black dark:text-white mb-6">404</h1>
      <p className="text-secondary-text dark:text-dark-secondary-text text-lg mb-10">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide rounded-sm bg-accent-green text-white hover:bg-accent-green-hover transition-colors"
      >
        Back to home
      </Link>
    </section>
    </>
  );
}
