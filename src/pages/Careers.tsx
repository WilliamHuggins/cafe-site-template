import { Helmet } from 'react-helmet-async';
export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Kaizen & Coffee</title>
        <meta name="description" content="Join the Kaizen & Coffee team in San Mateo and help create exceptional coffee experiences rooted in hospitality and continuous improvement." />
      </Helmet>
    <div className="pt-32 pb-24 bg-background dark:bg-dark-bg min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent-brown mb-6 block text-center">Join The Team</span>
        <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-heading-dark dark:text-dark-foreground mb-8 leading-[1.1] text-center">
          Craft, Care, and <br className="hidden md:block" />
          <em className="italic text-accent-green">Continuous Improvement.</em>
        </h1>
        
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg mb-16">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1024&auto=format&fit=crop"
            srcSet="
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=640&auto=format&fit=crop 640w,
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1024&auto=format&fit=crop 1024w,
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop 1600w
            "
            sizes="100vw"
            alt="Barista team" 
            loading="lazy"
            decoding="async"
            width={1600}
            height={686}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-heading-dark dark:text-dark-foreground mb-6">
              Who we are <em className="italic text-accent-green">looking for.</em>
            </h2>
            <p className="text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed mb-6">
              We are always looking for individuals who share our obsession with quality and our genuine love for hospitality. You don't need to be a coffee champion to work here, but you do need to care deeply about the details.
            </p>
            <p className="text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
              We value curiosity, empathy, and a strong work ethic. If you believe that a great cup of coffee and a warm interaction can change someone's day, you belong here.
            </p>
          </section>

          <section className="bg-section-bg dark:bg-dark-section-bg p-10 rounded-2xl transition-colors">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-accent-brown">01</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Kaizen</strong>
                  <span className="text-secondary-text dark:text-dark-secondary-text">We are never finished learning. We seek feedback and strive for daily refinement.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-accent-brown">02</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Radical Hospitality</strong>
                  <span className="text-secondary-text dark:text-dark-secondary-text">We treat every guest like they are entering our home.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-accent-brown">03</span>
                <div>
                  <strong className="block text-black dark:text-white mb-1">Precision</strong>
                  <span className="text-secondary-text dark:text-dark-secondary-text">We respect the ingredients by preparing them with exacting standards.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-heading-dark dark:text-dark-foreground mb-6">
              Current <em className="italic text-accent-green">Openings.</em>
            </h2>
            <div className="border-t border-border-light dark:border-border-dark">
              <div className="py-6 border-b border-border-light dark:border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Barista</h4>
                  <span className="text-sm text-muted-text dark:text-dark-muted-text">Full-time / Part-time • San Mateo, CA</span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_nI7VHflwWiAN34_BOh-ryN0QpyHb6w7MqhT_9Qaz-eo0wQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-accent-brown hover:border-accent-brown dark:hover:text-accent-brown dark:hover:border-accent-brown transition-colors w-fit"
                >
                  Apply Now
                </a>
              </div>
              <div className="py-6 border-b border-border-light dark:border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Mobile Bar Lead</h4>
                  <span className="text-sm text-muted-text dark:text-dark-muted-text">Part-time (Weekends) • Bay Area</span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_nI7VHflwWiAN34_BOh-ryN0QpyHb6w7MqhT_9Qaz-eo0wQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-accent-brown hover:border-accent-brown dark:hover:text-accent-brown dark:hover:border-accent-brown transition-colors w-fit"
                >
                  Apply Now
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-muted-text dark:text-dark-muted-text italic">
              Don't see a role that fits? Send your resume to careers@kaizencoffee.com and tell us why you'd be a great addition to the team.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
