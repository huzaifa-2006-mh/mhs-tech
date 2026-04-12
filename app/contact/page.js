export const metadata = {
  title: 'Contact MHS Tech – Software House in Karachi',
  description: 'Looking for the best software house in Karachi? Contact MHS Tech today for professional web development, SEO, and digital services.'
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#2d3d2a] pt-28">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-neon text-xs font-black tracking-[0.5em] uppercase mb-4">Inquiry</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-white">
            Get In <span className="text-neon">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-bold italic tracking-widest uppercase">
             Ready to secure your digital future?
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Contact Details */}
            <div className="space-y-12">
               <div>
                  <h3 className="text-4xl font-black mb-8 leading-none text-white">Contact <span className="text-neon">MHS Tech</span></h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    Looking for the best software house in Karachi? Contact MHS Tech today for professional web development, SEO, and digital services.
                  </p>
               </div>
               
               <div className="space-y-8">
                  <div className="group flex items-start gap-6 p-8 bg-[#253323] border border-white/5 hover:border-neon/30 transition-all rounded-3xl shadow-md">
                     <div className="text-3xl text-neon">📍</div>
                     <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Location</h4>
                        <p className="text-gray-300">Karachi, Pakistan</p>
                     </div>
                  </div>
                  <div className="group flex items-start gap-6 p-8 bg-[#253323] border border-white/5 hover:border-neon/30 transition-all rounded-3xl shadow-md">
                     <div className="text-3xl text-neon">✉️</div>
                     <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Email</h4>
                        <a href="mailto:mhsoftwarehouse77@gmail.com" className="text-gray-300 hover:text-neon transition-colors">mhsoftwarehouse77@gmail.com</a>
                     </div>
                  </div>
                  <div className="group flex items-start gap-6 p-8 bg-[#253323] border border-white/5 hover:border-neon/30 transition-all rounded-3xl shadow-md">
                     <div className="text-3xl text-neon">📞</div>
                     <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Phone</h4>
                        <p className="text-gray-300">+92 315 2931751</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1e2a1c] p-10 md:p-16 border border-white/5 rounded-[3rem] shadow-2xl">
               <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                  {/* Get your Access Key from https://web3forms.com/ */}
                  <input type="hidden" name="access_key" value="721b03b2-d7d7-4e8b-b996-5ef51259c345" />
                  <input type="hidden" name="from_name" value="MHS Tech Website" />
                  <input type="hidden" name="subject" value="New Inquiry from MHS Tech" />

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-300 ml-2">Your Name</label>
                     <input type="text" name="name" required className="w-full bg-[#2d3d2a] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-neon focus:outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-300 ml-2">Email Address</label>
                     <input type="email" name="email" required className="w-full bg-[#2d3d2a] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-neon focus:outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-300 ml-2">Message</label>
                     <textarea name="message" required className="w-full bg-[#2d3d2a] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-neon focus:outline-none transition-all h-40 resize-none" placeholder="How can we help you reach your goals?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-neon text-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-neon/10">
                     Send Message
                  </button>
                  <p className="text-[10px] text-gray-500 text-center mt-4">
                    Note: Replace YOUR_ACCESS_KEY_HERE with your key from web3forms.com
                  </p>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Connect */}
      <section className="py-24 bg-[#253323] border-t border-white/5">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-black mb-10 leading-none text-white">Instant <span className="text-neon">Connect</span></h3>
            <p className="text-gray-300 mb-10 text-lg">Click the button below to start a direct message with our team.</p>
            <a href="https://wa.me/923152931751" target="_blank" className="inline-block px-12 py-5 bg-[#25D366] text-white font-black uppercase tracking-widest text-sm hover:scale-110 transition-all rounded-full shadow-2xl shadow-emerald-500/20">
               Chat on WhatsApp
            </a>
         </div>
      </section>
    </main>
  );
}
