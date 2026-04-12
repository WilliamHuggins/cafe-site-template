import { useState, type FormEvent } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';
import useFadeInObserver from '../hooks/useFadeInObserver';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/catering@palmandlight.co';

export default function Catering() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useFadeInObserver();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const services = formData.getAll('services').join(', ');
    formData.set('services', services);
    formData.set('_subject', 'New Catering Inquiry - Palm & Light Coffee');

    try {
      setIsSubmitting(true);
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Unable to submit inquiry at this time.');
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setSubmitError(t('catering.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const offerings = [
    { title: t('catering.offers.items.0.title'), description: t('catering.offers.items.0.description') },
    { title: t('catering.offers.items.1.title'), description: t('catering.offers.items.1.description') },
    { title: t('catering.offers.items.2.title'), description: t('catering.offers.items.2.description') },
  ];

  const categories = [
    t('catering.intro.categories.0'),
    t('catering.intro.categories.1'),
    t('catering.intro.categories.2'),
    t('catering.intro.categories.3'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('catering.seoTitle')}</title>
        <meta name="description" content={t('catering.seoDescription')} />
      </Helmet>

      <main className="pt-20 bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground transition-colors">
        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <p className="text-sm tracking-[0.18em] uppercase text-[#C9703E] mb-5">{t('catering.hero.eyebrow')}</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-6">{t('catering.hero.headline')}</h1>
            <p className="text-lg leading-[1.8] text-foreground/75 dark:text-dark-foreground/75 max-w-xl">{t('catering.hero.body')}</p>
          </div>
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="https://i.postimg.cc/jd3vYj4H/Chat-GPT-Image-Apr-12-2026-04-20-42-PM.png"
              alt={t('catering.images.heroAlt')}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        <section className="py-20 px-6 md:px-10 lg:px-12 bg-panel-light/60 dark:bg-dark-section-bg/60 transition-colors">
          <div className="max-w-5xl mx-auto text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">{t('catering.intro.headline')}</h2>
            <p className="text-lg leading-[1.8] text-foreground/75 dark:text-dark-foreground/75 mb-10">{t('catering.intro.body')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((category) => (
                <div key={category} className="rounded-full border border-foreground/15 dark:border-dark-foreground/20 bg-background/80 dark:bg-dark-bg/80 px-4 py-3 text-sm md:text-base">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20 lg:py-24">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">{t('catering.offers.headline')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item) => (
              <article key={item.title} className="rounded-2xl border border-foreground/10 dark:border-dark-foreground/10 p-8 bg-background dark:bg-dark-section-bg">
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="leading-[1.8] text-foreground/75 dark:text-dark-foreground/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-6 md:px-10 lg:px-12 pb-8">
          <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://i.postimg.cc/Ghgznpxx/Chat-GPT-Image-Apr-12-2026-04-22-25-PM.png"
              alt={t('catering.images.experienceAlt')}
              className="w-full h-[340px] md:h-[460px] lg:h-[560px] object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section id="inquiry" className="py-20 lg:py-24 px-6 md:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-10 items-start">
            <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-serif text-4xl md:text-5xl mb-5">{t('catering.form.headline')}</h2>
              <p className="text-lg leading-[1.8] text-foreground/75 dark:text-dark-foreground/75 mb-8">{t('catering.form.body')}</p>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://i.postimg.cc/J4YKCh5K/Chat-GPT-Image-Apr-12-2026-04-21-21-PM.png" alt={t('catering.images.formAlt')} className="w-full h-[280px] md:h-[360px] object-cover" loading="lazy" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out rounded-2xl border border-foreground/10 dark:border-dark-foreground/10 bg-panel-light/60 dark:bg-dark-section-bg p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label={t('catering.form.fields.fullName')} name="fullName" required />
                <FormField label={t('catering.form.fields.email')} name="email" type="email" required />
                <FormField label={t('catering.form.fields.phone')} name="phone" required />
                <SelectField label={t('catering.form.fields.eventType')} name="eventType" options={[t('catering.form.options.eventType.wedding'), t('catering.form.options.eventType.corporate'), t('catering.form.options.eventType.privateEvent'), t('catering.form.options.eventType.other')]} required />
                <FormField label={t('catering.form.fields.eventDate')} name="eventDate" type="date" required />
                <FormField label={t('catering.form.fields.eventLocation')} name="eventLocation" required />
                <FormField label={t('catering.form.fields.guestCount')} name="guestCount" type="number" min="1" required />
                <SelectField label={t('catering.form.fields.budgetRange')} name="budgetRange" options={[t('catering.form.options.budget.optional'), t('catering.form.options.budget.under2k'), t('catering.form.options.budget.twoToFive'), t('catering.form.options.budget.fiveToTen'), t('catering.form.options.budget.tenPlus')]} />
              </div>

              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-foreground/80 dark:text-dark-foreground/80">{t('catering.form.fields.services')}</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <CheckboxField label={t('catering.form.options.services.coffee')} name="services" value={t('catering.form.options.services.coffee')} />
                  <CheckboxField label={t('catering.form.options.services.pastries')} name="services" value={t('catering.form.options.services.pastries')} />
                  <CheckboxField label={t('catering.form.options.services.fullService')} name="services" value={t('catering.form.options.services.fullService')} />
                </div>
              </fieldset>

              <label className="block text-sm font-medium text-foreground/80 dark:text-dark-foreground/80">
                {t('catering.form.fields.eventDetails')}
                <textarea name="eventDetails" rows={5} required className="mt-2 w-full rounded-md border border-foreground/20 dark:border-dark-foreground/25 bg-background dark:bg-dark-bg px-3 py-2" />
              </label>

              <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#C9703E] hover:bg-[#b86335] text-white px-5 py-3 text-sm tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
                {isSubmitting ? t('catering.form.submitting') : t('catering.form.submit')}
              </button>

              {isSubmitted && <p className="text-sm text-green-700 dark:text-green-400">{t('catering.form.success')}</p>}
              {submitError && <p className="text-sm text-red-700 dark:text-red-400">{submitError}</p>}
            </form>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 lg:px-12 bg-panel-light/50 dark:bg-dark-section-bg/50">
          <div className="max-w-5xl mx-auto rounded-2xl border border-foreground/10 dark:border-dark-foreground/10 bg-background/85 dark:bg-dark-bg/80 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr,260px] gap-8 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">{t('catering.offline.headline')}</h2>
              <p className="leading-[1.8] text-foreground/75 dark:text-dark-foreground/75 mb-6">{t('catering.offline.body')}</p>
              <div className="flex flex-wrap gap-3">
                <a href="/Palm-Light-Catering-Request-Form.pdf" download className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors">
                  <Download size={16} />
                  {t('catering.offline.download')}
                </a>
                <a href="mailto:catering@palmandlight.co" className="inline-flex items-center gap-2 rounded-md bg-[#C9703E] hover:bg-[#b86335] text-white px-4 py-2.5 text-sm transition-colors">
                  {t('catering.offline.email')}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <img src="https://i.postimg.cc/8PXwgCmt/Chat-GPT-Image-Apr-12-2026-04-23-39-PM.png" alt={t('catering.images.offlineAlt')} className="w-full h-[250px] object-cover rounded-xl" loading="lazy" />
          </div>
          <div className="max-w-5xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
            <img src="https://i.postimg.cc/NjyDswdJ/Chat-GPT-Image-Apr-12-2026-04-24-09-PM.png" alt={t('catering.images.optionalAlt')} className="w-full h-[230px] md:h-[300px] object-cover" loading="lazy" />
          </div>
        </section>
      </main>
    </>
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
};

function FormField({ label, name, type = 'text', required, min }: InputProps) {
  return (
    <label className="block text-sm font-medium text-foreground/80 dark:text-dark-foreground/80">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        className="mt-2 w-full rounded-md border border-foreground/20 dark:border-dark-foreground/25 bg-background dark:bg-dark-bg px-3 py-2"
      />
    </label>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-foreground/80 dark:text-dark-foreground/80">
      {label}
      <select name={name} required={required} className="mt-2 w-full rounded-md border border-foreground/20 dark:border-dark-foreground/25 bg-background dark:bg-dark-bg px-3 py-2">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function CheckboxField({ label, name, value }: { label: string; name: string; value: string }) {
  return (
    <label className="inline-flex items-center gap-2 rounded-md border border-foreground/15 dark:border-dark-foreground/15 px-3 py-2">
      <input type="checkbox" name={name} value={value} className="accent-[#C9703E]" />
      <span>{label}</span>
    </label>
  );
}
