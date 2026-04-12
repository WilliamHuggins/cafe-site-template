import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MobileBar() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      elements.forEach(el => observerRef.current?.unobserve(el));
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fbf9f8] dark:bg-[#121212] text-[#1b1c1c] dark:text-[#F5EDE3] font-sans overflow-x-hidden transition-colors duration-300 pt-20">
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row items-center px-8 py-20 max-w-7xl mx-auto gap-16">
        <div className="flex-1 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-[#1b1c1c] dark:text-[#F5EDE3] tracking-tight">
            The Best Part of Your Next Event? <br/>
            <em className="italic text-[#7A8B5E]">The Coffee.</em>
          </h1>
          <p className="text-lg md:text-xl leading-[1.7] text-[#1b1c1c]/75 dark:text-[#F5EDE3]/75 mb-12 max-w-lg">
            Ready to bring a memorable coffee experience to your event? Reach out with your details, and we'll work with you to create a custom proposal.
          </p>
          <button 
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium border border-[#1b1c1c]/20 dark:border-[#F5EDE3]/20 px-8 py-4 rounded-full hover:bg-[#1b1c1c] hover:text-[#F5EDE3] dark:hover:bg-[#F5EDE3] dark:hover:text-[#1b1c1c] hover:border-[#1b1c1c] dark:hover:border-[#F5EDE3] transition-all group"
          >
            PLAN YOUR EVENT
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex-1 w-full relative fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/695e36ad4f4b2e9a7f54c156_Screenshot%202026-01-07%20at%202.04.44%E2%80%AFAM.png" 
              alt="Kaizen Mobile Bar Setup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Let's Talk Coffee */}
      <section className="py-28 px-8 bg-[#f1efee] dark:bg-[#1A1A1A] transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/68d4da0c015d33e56143dc21_Screenshot%202025-09-24%20at%2010.55.46%E2%80%AFPM.png" 
                alt="Barista steaming milk" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl mb-8 text-[#1b1c1c] dark:text-[#F5EDE3]">
                Let's Talk Coffee
              </h2>
              <p className="text-lg md:text-xl leading-[1.8] text-[#1b1c1c]/80 dark:text-[#F5EDE3]/80">
                Great coffee does more than just caffeinate - it brings people together and sets the tone. Kaizen & Coffee is bringing the craft coffee experience from our San Mateo café. We provide a premium mobile espresso bar that serves as the perfect hub for conversation, connection, and seriously good coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column */}
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-6 text-[#1b1c1c] dark:text-[#F5EDE3]">
              The Experience, <em className="italic text-[#7A8B5E]">Simplified.</em>
            </h2>
            <p className="text-lg leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70 mb-10">
              We obsess over the details so you don't have to. Our service is designed to be seamless, self-contained, and a guaranteed highlight for your guests. Here's what's included:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-[#1b1c1c] dark:text-[#F5EDE3]">Passionate, Professional Baristas</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  Our friendly, approachable team is skilled in their craft and dedicated to providing an exceptional and welcoming experience.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-[#1b1c1c] dark:text-[#F5EDE3]">Curated Specialty Menu</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  A full cafe menu featuring our signature, locally-roasted beans. From classic espresso and lattes to perfectly made cortados, we have everyone covered.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-[#1b1c1c] dark:text-[#F5EDE3]">All the Good Stuff</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  We bring everything, including our full selection of premium dairy and non-dairy milks (yes, we have oat milk), and all the essentials for a complete cafe experience.
                </p>
              </div>
            </div>

            <div className="mt-16 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/695e36ad90072b0f6df8523f_Screenshot%202026-01-07%20at%202.03.55%E2%80%AFAM.png" 
                alt="Kaizen team member loading van" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out lg:mt-32">
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-6 text-[#1b1c1c] dark:text-[#F5EDE3]">
              A Better Experience for <em className="italic text-[#7A8B5E]">Any Gathering.</em>
            </h2>
            <p className="text-lg leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70 mb-10">
              Our professional baristas and beautifully designed mobile setup create a memorable focal point for any event. We're here to help you craft the perfect vibe.
            </p>
            
            <div className="space-y-8">
              <div className="p-8 border border-[#1b1c1c]/10 dark:border-[#F5EDE3]/10 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-medium mb-3 text-[#1b1c1c] dark:text-[#F5EDE3]">Corporate Events & Team Offsites</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  Fuel your team's next big idea and spark conversation. A dedicated coffee bar is the perfect upgrade for conferences, company milestones, or client appreciation events.
                </p>
              </div>
              <div className="p-8 border border-[#1b1c1c]/10 dark:border-[#F5EDE3]/10 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-medium mb-3 text-[#1b1c1c] dark:text-[#F5EDE3]">Weddings & Rehearsals</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  Add a thoughtful, modern touch to your celebration. Delight your guests with an artisan coffee experience during cocktail hour or as a perfect after-dinner treat.
                </p>
              </div>
              <div className="p-8 border border-[#1b1c1c]/10 dark:border-[#F5EDE3]/10 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-medium mb-3 text-[#1b1c1c] dark:text-[#F5EDE3]">Private Parties & Community Meetups</h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/70 dark:text-[#F5EDE3]/70">
                  From milestone birthdays to casual get-togethers, we'll make your event stand out with a dedicated, professional coffee service.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section id="inquiry-form" className="py-28 px-8 bg-gradient-to-b from-transparent to-[#f1efee]/50 dark:to-[#1A1A1A]/50">
        <div className="max-w-4xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="text-center mb-12">
            <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1b1c1c] dark:text-[#F5EDE3]">
              Plan Your Event
            </h2>
            <p className="text-[0.95rem] leading-[1.7] text-[#1b1c1c]/65 dark:text-[#F5EDE3]/65">
              Fill out the form below to request a custom proposal for your next gathering.
            </p>
          </div>
          
          <div className="bg-[#fbf9f8] dark:bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden border border-[#1b1c1c]/10 dark:border-[#F5EDE3]/10 relative min-h-[800px] p-2 md:p-3">
            {/* Loading placeholder */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-8 h-8 border-2 border-[#7A8B5E] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#1b1c1c]/10 dark:border-[#F5EDE3]/10 bg-white dark:bg-[#202020] h-full">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe6usRUgLA7u_5AD2aBwdXH7P0qSfpJoGjG2Q8ZbRSUnyWeKw/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                className="w-full min-h-[800px] border-0 bg-transparent relative z-10"
                title="Kaizen Mobile Bar Inquiry Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
