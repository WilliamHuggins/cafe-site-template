import { useState } from 'react';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function GiftCards() {
  const { t } = useTranslation();
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>{t('giftCards.seoTitle')}</title>
        <meta name="description" content={t('giftCards.seoDescription')} />
      </Helmet>
    <div className="pt-20 bg-background dark:bg-dark-bg min-h-screen flex flex-col transition-colors">
      <div className="flex-grow w-full h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
        <section className="rounded-2xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-6 md:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <img
              src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/68840587b4916f147e2cb7c8_logo_badge_2x.webp"
              alt="Palm & Light Coffee badge"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              loading="lazy"
              decoding="async"
              width={80}
              height={80}
            />
            <div>
              <h1 className="font-serif font-normal text-4xl md:text-5xl text-black dark:text-white mb-3">{t('giftCards.title')}</h1>
              <p className="text-secondary-text dark:text-dark-secondary-text max-w-2xl text-base md:text-lg leading-relaxed">
                {t('giftCards.description')}
              </p>
            </div>
          </div>
        </section>

        <div className="flex-grow relative rounded-2xl overflow-hidden bg-card-light dark:bg-panel-dark border border-border-tan dark:border-border-deep shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          {isIframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-background/90 dark:bg-dark-bg/90 backdrop-blur-sm p-6">
              <div className="h-12 w-12 rounded-full border-4 border-accent-green/30 border-t-accent-green animate-spin" aria-hidden="true"></div>
              <div className="w-full max-w-md space-y-3" aria-hidden="true">
                <div className="h-4 w-3/4 rounded bg-section-bg dark:bg-dark-section-bg animate-pulse"></div>
                <div className="h-4 w-full rounded bg-section-bg dark:bg-dark-section-bg animate-pulse"></div>
                <div className="h-4 w-5/6 rounded bg-section-bg dark:bg-dark-section-bg animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-secondary-text dark:text-dark-secondary-text">{t('giftCards.loading')}</p>
            </div>
          )}
          <div className="h-full rounded-2xl bg-white p-2 md:p-3 border border-foreground/10 dark:border-dark-foreground/15">
            <iframe
              src="https://order.toasttab.com/egiftcards/palmandlightcoffee"
              title="Palm & Light Coffee eGift Cards"
              className="w-full h-full border-0 rounded-xl min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-144px)]"
              allow="payment"
              onLoad={() => setIsIframeLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
