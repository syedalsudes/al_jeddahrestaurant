import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Clock, 
} from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Footer = () => {
  const socials = [
    { Icon: InstagramIcon, href: "#" },
    { Icon: FacebookIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" }
  ];

  return (
    <footer className="bg-maroon text-warm-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 text-[15rem] font-black text-accent-gold/[0.05] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 italic">
        SMOKE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black italic tracking-tighter uppercase text-accent-gold">
                AL -JEDDAH
              </span>
            </div>
            <p className="text-warm-white/80 text-sm leading-relaxed max-w-xs">
              Authentic slow-smoked BBQ crafted with passion and wood-fired to perfection. Serving the best sizzle since 1998.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-accent-gold text-maroon flex items-center justify-center hover:bg-warm-white hover:scale-110 transition-all border border-accent-gold/20 group"
                >
                  <social.Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 italic uppercase tracking-wider border-l-4 border-accent-gold pl-4 text-accent-gold">
              Quick Menu
            </h4>
            <ul className="space-y-4 text-warm-white/90 font-medium">
              {['Our Story', 'BBQ Menu', 'Special Platters', 'Private Events', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[2px] bg-accent-gold transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 italic uppercase tracking-wider border-l-4 border-accent-gold pl-4 text-accent-gold">
              Opening Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-accent-gold/20 pb-2">
                <span className="text-warm-white/80">Mon - Thu</span>
                <span className="font-bold text-accent-gold">4PM - 11PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-accent-gold/20 pb-2">
                <span className="text-warm-white/80">Fri - Sat</span>
                <span className="font-bold text-accent-gold">2PM - 1AM</span>
              </li>
              <li className="flex justify-between items-center border-b border-accent-gold/20 pb-2">
                <span className="text-warm-white/80">Sunday</span>
                <span className="font-bold text-accent-gold">12PM - 10PM</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-accent-gold/70 mt-4 italic">
                <Clock size={14} /> 
                <span>*Kitchen closes early on Sundays</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 italic uppercase tracking-wider border-l-4 border-accent-gold pl-4 text-accent-gold">
              Find Us
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/30 group-hover:bg-accent-gold transition-colors">
                  <MapPin size={20} className="text-accent-gold group-hover:text-maroon" />
                </div>
                <p className="text-warm-white/80 text-sm leading-snug">
                  123 Smokehouse Avenue, <br /> BBQ District, Karachi, Pakistan
                </p>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/30 group-hover:bg-accent-gold transition-colors">
                  <Phone size={20} className="text-accent-gold group-hover:text-maroon" />
                </div>
                <p className="text-warm-white text-sm font-bold">
                  +92 300 1234567 <br />
                  <span className="text-[10px] text-accent-gold uppercase tracking-widest font-normal">Toll Free: 0800-SMOKE</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-warm-white/60 uppercase tracking-[0.2em]">
          <p>© 2026 Pitmaster BBQ. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent-gold transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors text-accent-gold">Terms</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">Sitemap</Link>
          </div>
          <p className="font-bold text-accent-gold/80 italic">Made by retnavia developers</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;