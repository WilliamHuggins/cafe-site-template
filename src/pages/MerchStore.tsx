import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

type MerchProduct = {
  name: string;
  price: string;
  description: string;
  image: string;
  cta: string;
};

type GiftCardOption = {
  label: string;
};

export default function MerchStore() {
  const { t } = useTranslation();
  const giftCardOptions = t('merchStore.giftCards.options', { returnObjects: true }) as GiftCardOption[];
  const products = t('merchStore.products.items', { returnObjects: true }) as MerchProduct[];

  const squareGiftCardCheckoutUrl = import.meta.env.VITE_SQUARE_GIFT_CARD_CHECKOUT_URL || '#';
  const squareGiftCardEmbedUrl = import.meta.env.VITE_SQUARE_GIFT_CARD_EMBED_URL;

  return (
    <>
      <Helmet>
        <title>{t('merchStore.seoTitle')}</title>
        <meta name="description" content={t('merchStore.seoDescription')} />
      </Helmet>

      <main className="pt-20 min-h-screen bg-background dark:bg-dark-bg px-6 md:px-10 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto space-y-10">
          <section className="grid gap-8 lg:grid-cols-[1.1fr,1fr] items-center rounded-3xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-10 shadow-[0_18px_45px_rgba(28,24,19,0.08)]">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#C9703E] mb-3 font-medium">{t('merchStore.hero.eyebrow')}</p>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight text-black dark:text-white mb-4">
                {t('merchStore.hero.headline')}
              </h1>
              <p className="text-lg leading-[1.8] text-secondary-text dark:text-dark-secondary-text max-w-2xl">
                {t('merchStore.hero.body')}
              </p>
            </div>
            <img
              src={t('merchStore.hero.image')}
              alt={t('merchStore.hero.imageAlt')}
              className="w-full h-72 md:h-[25rem] object-cover rounded-2xl shadow-[0_14px_30px_rgba(34,28,21,0.16)]"
              loading="lazy"
            />
          </section>

          <section className="rounded-3xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-10 shadow-[0_18px_45px_rgba(28,24,19,0.08)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
              <div>
                <h2 className="font-serif text-4xl text-black dark:text-white mb-3">{t('merchStore.giftCards.headline')}</h2>
                <p className="text-secondary-text dark:text-dark-secondary-text text-base md:text-lg leading-[1.8] mb-6">
                  {t('merchStore.giftCards.body')}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {giftCardOptions.map((option) => (
                    <span
                      key={option.label}
                      className="rounded-full border border-[#d8c7ba] dark:border-border-deep px-4 py-2 text-sm bg-[#fff6ef] dark:bg-panel-dark-alt text-[#6f4e3a] dark:text-dark-foreground"
                    >
                      {option.label}
                    </span>
                  ))}
                </div>
                <a
                  href={squareGiftCardCheckoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#C9703E] hover:bg-[#b86335] text-white px-5 py-3 text-sm font-medium transition-colors"
                >
                  {t('merchStore.giftCards.cta')}
                </a>
                <p className="text-xs text-muted-text dark:text-dark-muted-text mt-3">
                  {t('merchStore.giftCards.integrationNote')}
                </p>
              </div>

              <div>
                {squareGiftCardEmbedUrl ? (
                  <iframe
                    src={squareGiftCardEmbedUrl}
                    title={t('merchStore.giftCards.embedTitle')}
                    className="w-full min-h-[360px] rounded-2xl border border-border-tan dark:border-border-deep"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={t('merchStore.giftCards.image')}
                    alt={t('merchStore.giftCards.imageAlt')}
                    className="w-full h-[360px] object-cover rounded-2xl shadow-[0_14px_30px_rgba(34,28,21,0.16)]"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-4xl text-black dark:text-white">{t('merchStore.products.headline')}</h2>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="rounded-2xl bg-[#f8f4f1] dark:bg-panel-dark p-5 border border-[#e4d8cf] dark:border-border-deep shadow-[0_12px_25px_rgba(45,33,24,0.08)] hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(45,33,24,0.16)] transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl leading-tight text-heading-dark dark:text-white">{product.name}</h3>
                    <p className="text-sm font-semibold text-[#C9703E]">{product.price}</p>
                    <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-secondary-text">{product.description}</p>
                  </div>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-md border border-[#d6c5b7] dark:border-border-deep py-2.5 text-sm font-medium text-[#7a4f33] dark:text-dark-foreground hover:bg-[#fff1e5] dark:hover:bg-panel-dark-hover transition-colors"
                  >
                    {product.cta}
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-10 text-center shadow-[0_18px_45px_rgba(28,24,19,0.08)]">
            <h2 className="font-serif text-4xl text-black dark:text-white mb-3">{t('merchStore.coffeeFeature.headline')}</h2>
            <p className="text-base md:text-lg leading-[1.8] text-secondary-text dark:text-dark-secondary-text max-w-2xl mx-auto">
              {t('merchStore.coffeeFeature.body')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
