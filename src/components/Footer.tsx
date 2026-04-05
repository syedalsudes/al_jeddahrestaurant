import Link from 'next/link';
import { 
  MapPin, 
  Phone,
  Flame,
} from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const Footer = () => {
  const socials = [
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#2A080A] text-warm-white pt-24 pb-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 text-[18rem] font-black text-white/[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/3 italic uppercase">
        Pitmaster
      </div>

      <div className="container mx-auto px-6 relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-4xl font-black italic tracking-tighter uppercase text-accent-gold block leading-none">
                AL-JEDDAH
              </span>
              <span className="text-[10px] tracking-[0.4em] text-warm-white/40 uppercase mt-2 block font-bold">The Smokehouse Experience</span>
            </div>
            <p className="text-warm-white/70 text-sm leading-relaxed">
              Legendary slow-smoked meats, crafted with our signature rub and hickory wood since 1998. 
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 text-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-maroon transition-all duration-300 group shadow-lg"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center gap-2">
              <Flame size={18} className="text-accent-gold" /> Explore
            </h4>
            <ul className="space-y-4 text-warm-white/70">
              {['Our Story', 'BBQ Menu', 'Special Platters', 'Private Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent-gold transition-colors flex items-center gap-3 group">
                    <span className="h-1 w-0 bg-accent-gold group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Service Hours</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold mb-1">Weekdays</span>
                <div className="flex justify-between items-center">
                    <span className="text-warm-white/90">Mon - Thu</span>
                    <span className="text-white font-mono">16:00 - 23:00</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold mb-1">Weekend Specials</span>
                <div className="flex justify-between items-center">
                    <span className="text-warm-white/90">Fri - Sun</span>
                    <span className="text-white font-mono">14:00 - 01:00</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Visit Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-gold/5 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-maroon transition-all">
                  <MapPin size={20} />
                </div>
                <p className="text-warm-white/70 text-sm pt-1">
                  123 Smokehouse Avenue, <br /> BBQ District, Karachi, PK
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-gold/5 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-maroon transition-all">
                  <Phone size={20} />
                </div>
                <div>
                    <p className="text-white font-bold text-sm">+92 300 1234567</p>
                    <p className="text-[10px] text-accent-gold uppercase tracking-widest mt-1">Order Hotline</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-warm-white/40 uppercase tracking-[0.3em]">
            © 2026 Al-Jeddah Smokehouse. Crafted for meat lovers.
          </p>
          <div className="flex gap-8 text-[10px] text-warm-white/40 uppercase tracking-widest font-bold">
            <Link href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">Terms of Service</Link>
          </div>
          <p className="text-[10px] text-accent-gold/60 font-black italic tracking-widest">
            DESIGNED BY RETNAVIA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;