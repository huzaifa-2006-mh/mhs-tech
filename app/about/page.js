export const metadata = {
  title: 'About MHS Tech | Software House in Karachi',
  description: 'Learn about MHS Tech, a growing software house in Karachi providing IT services including web development, SEO, and software solutions.'
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#2d3d2a] pt-28">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-white">
            About <span className="text-neon">MHS Tech</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-bold italic tracking-widest uppercase">
            Leading Software House in Karachi, Pakistan.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#233021]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 text-white uppercase italic">Our <span className="text-neon">Mission</span></h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Our team consists of passionate developers, designers, and digital experts who focus on delivering innovative, scalable, and efficient solutions.
                </p>
                <p>
                  We understand the importance of digital presence in today’s competitive market. That’s why we create solutions that are not only visually appealing but also optimized for performance and search engines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2d3d2a] p-10 border border-white/5 rounded-3xl shadow-2xl">
                <div className="text-4xl font-black text-neon mb-2 uppercase">100%</div>
                <p className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase">Satisfaction</p>
              </div>
              <div className="bg-[#2d3d2a] p-10 border border-white/5 rounded-3xl shadow-2xl translate-y-8">
                <div className="text-4xl font-black text-neon mb-2 uppercase">24/7</div>
                <p className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase">Tech Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#233021]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Expert Development", desc: "Our team of specialized developers builds high-performance digital solutions tailored to your needs." },
              { title: "Modern Design", desc: "We focus on clean, intuitive, and high-tech user interfaces that engage your audience." },
              { title: "SEO Driven", desc: "Every project is built with search engine optimization at its core to ensure visibility." }
            ].map((feature, i) => (
              <div key={i} className="group p-10 border border-white/5 hover:border-neon transition-all rounded-3xl bg-[#2d3d2a]">
                <h4 className="text-xl font-black mb-4 group-hover:text-neon transition-colors text-white uppercase italic">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
