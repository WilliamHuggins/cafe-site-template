import { Link } from 'react-router-dom';
import { Helmet } from '../components/Helmet';

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>Coming Soon | Kaizen & Coffee</title>
        <meta name="description" content="More from Kaizen & Coffee is on the way. Check back soon for updates to this page." />
      </Helmet>
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
        This page is coming soon
      </h1>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm bg-black dark:bg-white text-white dark:text-black hover:bg-cta-hover-dark dark:hover:bg-surface-light transition-colors"
      >
        Back to home
      </Link>
    </section>
    </>
  );
}
