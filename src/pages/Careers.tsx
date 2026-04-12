export default function Careers() {
  return (
    <div className="pt-32 pb-24 bg-[#fbf9f8] dark:bg-[#121212] min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#997f6b] mb-6 block text-center">Join The Team</span>
        <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-[#1A1411] dark:text-[#F5EDE3] mb-8 leading-[1.1] text-center">
          Craft, Care, and <br className="hidden md:block" />
          <em className="italic text-[#7A8B5E]">Continuous Improvement.</em>
        </h1>
        
        <div className="aspect-[21/9] rounded-sm overflow-hidden bg-[#efeded] dark:bg-[#1a1a1a] mb-16">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop" 
            alt="Barista team" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-[#1A1411] dark:text-[#F5EDE3] mb-6">
              Who we are <em className="italic text-[#7A8B5E]">looking for.</em>
            </h2>
            <p className="text-[#444748] dark:text-[#c8c6c5] text-lg leading-relaxed mb-6">
              We are always looking for individuals who share our obsession with quality and our genuine love for hospitality. You don't need to be a coffee champion to work here, but you do need to care deeply about the details.
            </p>
            <p className="text-[#444748] dark:text-[#c8c6c5] text-lg leading-relaxed">
              We value curiosity, empathy, and a strong work ethic. If you believe that a great cup of coffee and a warm interaction can change someone's day, you belong here.
            </p>
          </section>

          <section className="bg-[#efeded] dark:bg-[#1a1a1a] p-10 rounded-sm transition-colors">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-[#997f6b]">01</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Kaizen</strong>
                  <span className="text-[#444748] dark:text-[#c8c6c5]">We are never finished learning. We seek feedback and strive for daily refinement.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[#997f6b]">02</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Radical Hospitality</strong>
                  <span className="text-[#444748] dark:text-[#c8c6c5]">We treat every guest like they are entering our home.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[#997f6b]">03</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Precision</strong>
                  <span className="text-[#444748] dark:text-[#c8c6c5]">We respect the ingredients by preparing them with exacting standards.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-[#1A1411] dark:text-[#F5EDE3] mb-6">
              Current <em className="italic text-[#7A8B5E]">Openings.</em>
            </h2>
            <div className="border-t border-[#dbdad9] dark:border-[#303031]">
              <div className="py-6 border-b border-[#dbdad9] dark:border-[#303031] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Barista</h4>
                  <span className="text-sm text-[#858383] dark:text-[#747878]">Full-time / Part-time • San Mateo, CA</span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_nI7VHflwWiAN34_BOh-ryN0QpyHb6w7MqhT_9Qaz-eo0wQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-[#997f6b] hover:border-[#997f6b] dark:hover:text-[#997f6b] dark:hover:border-[#997f6b] transition-colors w-fit"
                >
                  Apply Now
                </a>
              </div>
              <div className="py-6 border-b border-[#dbdad9] dark:border-[#303031] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Mobile Bar Lead</h4>
                  <span className="text-sm text-[#858383] dark:text-[#747878]">Part-time (Weekends) • Bay Area</span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_nI7VHflwWiAN34_BOh-ryN0QpyHb6w7MqhT_9Qaz-eo0wQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-[#997f6b] hover:border-[#997f6b] dark:hover:text-[#997f6b] dark:hover:border-[#997f6b] transition-colors w-fit"
                >
                  Apply Now
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-[#858383] dark:text-[#747878] italic">
              Don't see a role that fits? Send your resume to careers@kaizencoffee.com and tell us why you'd be a great addition to the team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
