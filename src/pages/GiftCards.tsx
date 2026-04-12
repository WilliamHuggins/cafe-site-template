export default function GiftCards() {
  return (
    <div className="pt-20 bg-[#fbf9f8] dark:bg-[#121212] min-h-screen flex flex-col transition-colors">
      <div className="flex-grow w-full h-full flex flex-col p-4 md:p-6">
        <div className="flex-grow rounded-2xl overflow-hidden bg-[#f5f2ef] dark:bg-[#1f1f1f] border border-[#d9d4cf] dark:border-[#3a3a3a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
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
