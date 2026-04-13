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

const fallbackGiftCardOptions: GiftCardOption[] = [{ label: '$25' }, { label: '$50' }, { label: '$100' }];

const fallbackProducts: MerchProduct[] = [
  {
    name: 'Palm & Light Tee',
    price: '$38',
    description: 'A soft everyday tee with understated Palm & Light branding.',
    image: 'https://i.postimg.cc/QxSNX2FQ/Chat-GPT-Image-Apr-12-2026-04-36-12-PM.png',
    cta: 'Add to Cart',
  },
  {
    name: 'Palm & Light Sticker Set',
    price: '$12',
    description: 'A small collection of café-inspired stickers for laptops, notebooks, and travel mugs.',
    image: 'https://i.postimg.cc/fT5WwGVv/Chat-GPT-Image-Apr-12-2026-04-36-53-PM.png',
    cta: 'Add to Cart',
  },
  {
    name: 'Palm & Light Diner Mug',
    price: '$24',
    description: 'A classic heavyweight mug made for your everyday cup.',
    image: 'https://i.postimg.cc/SNVQyBnf/Chat-GPT-Image-Apr-12-2026-04-38-24-PM.png',
    cta: 'Add to Cart',
  },
  {
    name: 'Whole Bean Collection',
    price: 'House Blend $22 · Citrus Grove $24 · Golden Hour Espresso $24 · Decaf $23',
    description: 'A rotating selection of whole beans, roasted for balance, clarity, and everyday ritual.',
    image: 'https://i.postimg.cc/fT5WwGV2/Chat-GPT-Image-Apr-12-2026-04-39-38-PM.png',
    cta: 'View Details',
  },
];

const fallbackHeroImage = 'https://i.postimg.cc/J4K71fsj/Chat-GPT-Image-Apr-12-2026-04-34-14-PM.png';

const resolveTranslatedArray = <T,>(value: unknown, fallback: T[]): T[] => {
  return Array.isArray(value) ? (value as T[]) : fallback;
};

export default function MerchStore() {
  const { t } = useTranslation();

  const translatedGiftCardOptions = t('merchStore.giftCards.options', { returnObjects: true }) as unknown;
  const giftCardOptions = resolveTranslatedArray<GiftCardOption>(translatedGiftCardOptions, fallbackGiftCardOptions);

  const translatedProducts = t('merchStore.products.items', { returnObjects: true }) as unknown;
  const products = resolveTranslatedArray<MerchProduct>(translatedProducts, fallbackProducts);

  const squareGiftCardCheckoutUrl = import.meta.env.VITE_SQUARE_GIFT_CARD_CHECKOUT_URL || '#';
  const squareGiftCardEmbedUrl = import.meta.env.VITE_SQUARE_GIFT_CARD_EMBED_URL;

  return (
    <>
      <Helmet>
        <title>{t('merchStore.seoTitle', 'Shop | Palm & Light Coffee')}</title>
        <meta
          name="description"
          content={t('merchStore.seoDescription', 'Gift cards, coffee, and curated goods from Palm & Light Coffee.')}
        />
      </Helmet>

      <main className="pt-20 min-h-screen bg-background dark:bg-dark-bg px-6 md:px-10 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto space-y-10">
          <section className="grid gap-8 lg:grid-cols-[1.1fr,1fr] items-center rounded-3xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-10 shadow-[0_18px_45px_rgba(28,24,19,0.08)]">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#C9703E] mb-3 font-medium">{t('merchStore.hero.eyebrow', 'SHOP')}</p>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight text-black dark:text-white mb-4">
                {t('merchStore.hero.headline', 'Take a piece of Palm & Light with you.')}
              </h1>
              <p className="text-lg leading-[1.8] text-secondary-text dark:text-dark-secondary-text max-w-2xl">
                {t('merchStore.hero.body', 'Gift cards, coffee, and everyday objects designed for slow mornings.')}
              </p>
            </div>
            <img
              src={t('merchStore.hero.image', fallbackHeroImage)}
              alt={t('merchStore.hero.imageAlt', 'Palm & Light shop hero')}
              className="w-full h-72 md:h-[25rem] object-cover rounded-2xl shadow-[0_14px_30px_rgba(34,28,21,0.16)]"
              loading="lazy"
            />
          </section>

          <section className="rounded-3xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-10 shadow-[0_18px_45px_rgba(28,24,19,0.08)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
              <div>
                <h2 className="font-serif text-4xl text-black dark:text-white mb-3">{t('merchStore.giftCards.headline', 'Gift Cards')}</h2>
                <p className="text-secondary-text dark:text-dark-secondary-text text-base md:text-lg leading-[1.8] mb-6">
                  {t('merchStore.giftCards.body', 'A simple, thoughtful gift for coffee, pastries, and slow mornings.')}
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
                  {t('merchStore.giftCards.cta', 'Buy Gift Card')}
                </a>
                <p className="text-xs text-muted-text dark:text-dark-muted-text mt-3">
                  {t('merchStore.giftCards.integrationNote', 'Square gift card checkout opens in a new tab.')}
                </p>
              </div>

              <div>
                {squareGiftCardEmbedUrl ? (
                  <iframe
                    src={squareGiftCardEmbedUrl}
                    title={t('merchStore.giftCards.embedTitle', 'Palm & Light Square gift card checkout')}
                    className="w-full min-h-[360px] rounded-2xl border border-border-tan dark:border-border-deep"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={t('merchStore.giftCards.image', fallbackHeroImage)}
                    alt={t('merchStore.giftCards.imageAlt', 'Palm & Light gift cards')}
                    className="w-full h-[360px] object-cover rounded-2xl shadow-[0_14px_30px_rgba(34,28,21,0.16)]"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-4xl text-black dark:text-white">{t('merchStore.products.headline', 'Curated Goods')}</h2>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={`${product.name}-${product.price}`}
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
            <h2 className="font-serif text-4xl text-black dark:text-white mb-3">
              {t('merchStore.coffeeFeature.headline', 'Coffee for home')}
            </h2>
            <p className="text-base md:text-lg leading-[1.8] text-secondary-text dark:text-dark-secondary-text max-w-2xl mx-auto">
              {t('merchStore.coffeeFeature.body', 'Bring the café into your morning ritual.')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
