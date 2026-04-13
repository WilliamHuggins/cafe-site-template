import { Link } from 'react-router-dom';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

export default function PrototypeNotes() {
  const localizePath = useLocalizedPath();

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl font-bold mb-4">Prototype Notes</h1>
      <p className="text-secondary-text dark:text-dark-secondary-text mb-8">
        This page is intended for internal previews only. Keep temporary messaging, experiments, and draft decisions here
        until they are production-ready.
      </p>

      <section className="space-y-3 mb-10">
        <h2 className="text-xl font-semibold">Suggested usage</h2>
        <ul className="list-disc pl-5 space-y-2 text-secondary-text dark:text-dark-secondary-text">
          <li>Track copy decisions before publishing final text.</li>
          <li>List navigation or layout changes being tested.</li>
          <li>Store links to prototype-only assets and references.</li>
        </ul>
      </section>

      <Link
        to={localizePath('/')}
        className="inline-flex items-center rounded-sm bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium"
      >
        Return to homepage
      </Link>
    </main>
  );
}
