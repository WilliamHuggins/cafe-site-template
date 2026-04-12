export default function GiftCards() {
  return (
    <div className="pt-20 bg-background dark:bg-dark-bg min-h-screen flex flex-col transition-colors">
      <div className="flex-grow w-full h-full flex flex-col p-4 md:p-6">
        <div className="flex-grow rounded-2xl overflow-hidden bg-card-light dark:bg-panel-dark border border-border-tan dark:border-border-deep shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <iframe 
            src="https://order.toasttab.com/egiftcards/kaizenandcoffee"
            title="Kaizen & Coffee eGift Cards"
            className="w-full flex-grow border-0 min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-128px)]"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}
