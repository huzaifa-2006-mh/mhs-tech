import Link from 'next/link';

export const metadata = {
  title: 'Best Software House in Karachi | MHS Tech',
  description: 'MHS Tech is a leading software house in Karachi offering web development, SEO, graphic design, video editing, and custom software solutions in Pakistan.',
  keywords: 'software house in Karachi, best software house in Pakistan, web development company Karachi, SEO services Karachi, affordable web development Pakistan, graphic design services Pakistan, custom software development company'
};

export default function Home() {
  return (
    <main className="min-h-screen pt-20 md:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#2d3d2a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(189,242,74,0.08)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-white">
            Best Software House <br/>
            <span className="text-neon">in Karachi – MHS Tech</span>
          </h1>
          <p className="text-lg md:text-xl text-neon font-bold mb-8 tracking-widest uppercase italic">
            We provide professional web development, SEO, graphic design, video editing, and custom software development services to help your business grow online.
          </p>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              MHS Tech is a leading software house in Karachi, Pakistan, offering innovative and scalable digital solutions. We specialize in building high-performance websites, modern UI/UX designs, and result-driven SEO strategies to boost your online presence and business growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-neon text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-neon/20">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="px-10 py-4 border-2 border-neon text-neon font-black uppercase tracking-widest text-sm hover:bg-neon hover:text-black transition-all transform hover:-translate-y-1">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#233021]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black tracking-[0.5em] text-neon uppercase mb-4">Discovery</h2>
              <h3 className="text-4xl font-extrabold mb-8 leading-tight text-white">MHS Tech – <br/>Software House in <span className="text-neon">Karachi</span></h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  At MHS Tech, we are committed to delivering top-notch IT services including website development, graphic designing, SEO services, video editing, and custom software development.
                </p>
                <p>
                  Our expert team ensures that every project is optimized for performance, speed, and search engines. We help startups, small businesses, and enterprises establish a strong digital presence through innovative solutions and cutting-edge technologies.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/about" className="text-neon font-bold uppercase tracking-widest border-b-2 border-neon/30 hover:border-neon transition-all py-2">
                  Learn Our Story
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-neon/10 rounded-xl blur-2xl group-hover:bg-neon/20 transition-all opacity-50" />
              <div className="relative bg-[#050505] border border-white/5 p-1 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-neon/30">
                 <img src="/hero.png" alt="MHS Tech Excellence" className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#2d3d2a] relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#233021] to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black tracking-[0.5em] text-neon uppercase mb-4">Solutions</h2>
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter italic text-white">Our <span className="text-neon">Digital Arsenal</span></h3>
            <p className="text-gray-300 max-w-2xl mx-auto font-medium">
              We offer a complete range of digital services designed to grow your business online with focus on performance and SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Web Development Services", desc: "Responsive, fast, and SEO-friendly websites using modern technologies.", icon: "💻", img: "/lms.png" },
              { title: "Graphic Design Services", desc: "Creative logos, branding, and social media designs that attract customers.", icon: "🎨", img: "/tshirt_store.png" },
              { title: "SEO Services in Karachi", desc: "Rank your website on Google with our expert SEO strategies.", icon: "🚀", img: "/ecom.png" },
            ].map((service, index) => (
              <div key={index} className="group bg-[#0a0a0a] border border-white/5 hover:border-neon/40 transition-all overflow-hidden rounded-2xl shadow-2xl">
                <div className="h-48 overflow-hidden relative">
                   <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                   <div className="absolute bottom-4 left-6 text-2xl">{service.icon}</div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black mb-4 text-white group-hover:text-neon transition-colors leading-tight uppercase tracking-tight">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="w-10 h-0.5 bg-neon/10 group-hover:w-full group-hover:bg-neon transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#233021] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h3 className="text-5xl md:text-6xl font-black mb-10 leading-none text-white italic">Why Choose <br/><span className="text-neon">MHS Tech</span></h3>
           <p className="text-gray-300 mb-12 leading-relaxed text-lg max-w-2xl mx-auto">
             Choosing the right software house is crucial for your business success. Here’s why MHS Tech stands out in the competitive landscape of Pakistan:
           </p>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
             {[
               "Experienced Developers & Designers",
               "Affordable Pricing in Pakistan",
               "Fast Delivery & Quality Work",
               "SEO-Optimized Development",
               "100% Client Satisfaction"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group bg-[#2d3d2a] p-6 rounded-2xl border border-white/5 hover:border-neon transition-all">
                 <span className="w-8 h-8 rounded-full bg-neon flex items-center justify-center text-black text-sm font-black shadow-lg shadow-neon/40">✓</span>
                 <span className="text-lg font-bold text-gray-200 group-hover:text-neon transition-colors">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#2d3d2a]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(189,242,74,0.05)_0%,_transparent_70%)]" />
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none text-white">Ready to Start Your <br/>Project with <span className="text-neon">MHS Tech?</span></h2>
            <Link href="/contact" className="inline-block px-12 py-5 bg-neon text-black font-black uppercase tracking-widest text-sm hover:scale-110 hover:rotate-2 transition-all shadow-xl shadow-neon/20">
               Get A Free Consultation
            </Link>
         </div>
      </section>
    </main>
  );
}
