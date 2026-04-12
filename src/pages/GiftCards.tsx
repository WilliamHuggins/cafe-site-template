export default function GiftCards() {
  return (
    <div className="pt-20 bg-[#fbf9f8] dark:bg-[#121212] min-h-screen flex flex-col transition-colors">
      <div className="flex-grow w-full h-full flex flex-col">
        <iframe 
          src="https://order.toasttab.com/egiftcards/kaizenandcoffee"
          title="Kaizen & Coffee eGift Cards"
          className="w-full flex-grow border-0 min-h-[calc(100vh-80px)]"
          allow="payment"
        />
      </div>
    </div>
  );
}
