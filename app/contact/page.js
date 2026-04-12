'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

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
            <div className="relative bg-[#1e2a1c] p-10 md:p-16 border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden">
               <form onSubmit={handleSubmit} className="space-y-8">
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
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full py-5 bg-neon text-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-neon/10 disabled:opacity-50`}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success Popup/Overlay */}
                  {status === 'success' && (
                    <div className="absolute inset-0 bg-[#1e2a1c] flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 rounded-full bg-neon/10 flex items-center justify-center text-neon text-4xl mb-6 shadow-2xl shadow-neon/20">✓</div>
                      <h3 className="text-3xl font-black text-white uppercase italic mb-4">Message Sent!</h3>
                      <p className="text-gray-300 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                      <button 
                        onClick={() => setStatus('')}
                        className="text-neon text-[10px] font-black uppercase tracking-widest border-b border-neon/30 hover:border-neon transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}

                  {status === 'error' && (
                    <p className="text-red-400 text-xs text-center mt-4">Something went wrong. Please try again or common via WhatsApp.</p>
                  )}
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
