'use client';

export default function Services() {
  const services = [
    {
      title: "Website Development Services",
      desc: "We provide professional website development services in Karachi, Pakistan. Our websites are fully responsive, fast-loading, and SEO-optimized. We build business websites, e-commerce platforms, portfolios, and custom web applications.",
      image: "/web-dev.png",
      features: ["Responsive Design", "E-commerce Platforms", "Portfolios", "Custom Web Apps"]
    },
    {
      title: "SEO Services in Pakistan",
      desc: "Our SEO services help your website rank higher on Google through data-driven strategies and technical precision. We focus on long-term organic growth.",
      image: "/lms.png",
      features: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Speed Optimization"]
    },
    {
      title: "Graphic Design Services",
      desc: "We create visually appealing designs that strengthen your brand identity. Our designs are crafted to capture attention and convert visitors into customers.",
      image: "/tshirt_store.png",
      features: ["Logo Design", "Social Media Posts", "Banners", "Branding Kits"]
    },
    {
      title: "Video Editing Services",
      desc: "Professional video editing for YouTube, social media, and marketing campaigns with modern effects and transitions that tell your story.",
      image: "/hero.png",
      features: ["YouTube Editing", "Ad Production", "Social Proof", "Modern Effects"]
    },
    {
      title: "Custom Software Development",
      desc: "We develop custom software tailored to your business needs, including management systems, dashboards, and automation tools.",
      image: "/ecom.png",
      features: ["Management Systems", "Dashboards", "Business Automation"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#2d3d2a] pt-28">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-neon text-xs font-black tracking-[0.5em] uppercase mb-4">What We Do</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-white">
            Our <span className="text-neon">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-bold italic tracking-widest uppercase">
             Bespoke Digital Solutions Crafted for Excellence
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={index} className={`py-32 ${index % 2 === 0 ? 'bg-[#233021]' : 'bg-[#2d3d2a]'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               <div className="w-full md:w-1/2">
                  <div className="text-neon font-black mb-4 uppercase tracking-[0.3em] text-[10px]">#{index + 1} Service</div>
                  <h3 className="text-4xl md:text-5xl font-black mb-8 leading-none text-white italic">{service.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">{service.desc}</p>
                  <ul className="space-y-4">
                     {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-4 group">
                           <span className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center text-neon text-[10px] font-black group-hover:bg-neon group-hover:text-black transition-all">✓</span>
                           <span className="text-gray-300 group-hover:text-white transition-colors uppercase text-sm font-bold tracking-widest">{feature}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative bg-[#050505] p-2 rounded-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-neon/40">
                     <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  </div>
               </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-[#1a2519] border-t border-white/5">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-black mb-10 leading-none text-white uppercase italic">Need a Specialized Solution?</h3>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Our development team is ready to tackle complex challenges. From enterprise dashboards to high-performance e-commerce sites.
            </p>
            <a href="/contact" className="inline-block px-10 py-4 border-2 border-neon text-neon font-black uppercase tracking-widest text-sm hover:bg-neon hover:text-black transition-all">
               Talk To Our Experts
            </a>
         </div>
      </section>
    </main>
  );
}
