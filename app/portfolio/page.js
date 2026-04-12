import Link from 'next/link';
export const metadata = {
  title: 'Our Portfolio – Professional Web Development & Software Projects',
  description: 'Explore the portfolio of MHS Tech, a professional software house in Karachi showcasing LMS, e-commerce, and personal portfolio projects.',
  keywords: 'web development projects Pakistan, software house portfolio Karachi, e-commerce website developers, LMS development Pakistan, portfolio website developers'
};

export default function Portfolio() {
  const projects = [
    {
      title: "Learning Management System (LMS)",
      link: "https://mhlms.vercel.app/",
      desc: "This Learning Management System (LMS) is a fully functional web application designed to manage online education efficiently. It allows users to access courses, manage learning content, and track progress.",
      features: ["Course management system", "Student dashboard", "Responsive UI design", "Fast loading performance", "Clean and modern interface"],
      tech: "HTML, CSS, JavaScript (Next.js)",
      seo: "Optimized structure and fast performance help improve search engine visibility.",
      image: "/lms.png"
    },
    {
      title: "E-Commerce Website",
      link: "https://e-commerce-pro-six.vercel.app/",
      desc: "A modern e-commerce website designed to provide a seamless online shopping experience. This project includes product listings, cart functionality, and responsive design.",
      features: ["Product catalog", "Add to cart system", "User-friendly UI/UX", "Mobile responsive design", "Fast navigation"],
      tech: "HTML, CSS, JavaScript / React",
      business: "Helps businesses sell products online with a professional and scalable solution.",
      image: "/ecom.png"
    },
    {
      title: "T-Shirt E-Commerce Store",
      link: "https://t-shirt-e-coomerce.vercel.app/",
      desc: "A stylish and visually appealing e-commerce platform focused on clothing brands. Designed to attract customers with modern UI and smooth browsing experience.",
      features: ["Modern product showcase", "Attractive UI design", "Mobile-friendly layout", "Fast performance"],
      advantage: "Optimized images and structure improve ranking and user engagement.",
      image: "/tshirt_store.png"
    },
    {
      title: "Personal Portfolio Website",
      link: "https://huzaifa-portfolio-ten-eosin.vercel.app/",
      desc: "A professional developer portfolio showcasing skills, projects, and experience. Designed to create a strong personal brand online.",
      features: ["Clean and modern UI", "Responsive design", "Project showcase section", "Contact integration"],
      purpose: "Helps developers attract clients and job opportunities.",
      tech: "React, Tailwind CSS, Framer Motion",
      image: "/web-dev.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#2d3d2a] pt-28">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-neon text-xs font-black tracking-[0.5em] uppercase mb-4">Our Work</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-white">
            Our <span className="text-neon">Portfolio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-bold italic tracking-widest uppercase">
            At MHS Tech, we take pride in delivering high-quality digital solutions tailored to client needs. Our portfolio showcases a range of projects including web development, e-commerce platforms, learning management systems, and modern portfolio websites.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="w-full md:w-1/2 group relative">
                  <div className="absolute -inset-4 bg-neon/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative bg-[#233021] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                     <img src={project.image} alt={project.title} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="mt-6 flex justify-between items-center px-2">
                     <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-300">{project.tech}</span>
                     <a href={project.link} target="_blank" className="text-xs font-bold text-neon hover:text-white transition-colors border-b border-neon/30 hover:border-white">VIEW LIVE PREVIEW</a>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tight text-white">{project.title}</h2>
                   <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.desc}</p>
                   
                   <div className="mb-8">
                      <h4 className="text-neon text-xs font-black tracking-widest uppercase mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                             <span className="w-1 h-1 bg-neon rounded-full" />
                             {feature}
                          </li>
                        ))}
                      </ul>
                   </div>

                   <div className="p-6 bg-[#233021] border-l-2 border-neon rounded-r-xl italic text-gray-400 text-sm">
                      {project.seo || project.business || project.advantage || project.purpose}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Projects Stand Out */}
      <section className="py-24 bg-[#1a2519] border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic lg:text-5xl text-white">Why Our Projects <span className="text-neon">Stand Out</span></h3>
               <p className="text-gray-400">At MHS Tech, every project is built with a focus on quality, performance, and scalability.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {["SEO-Friendly Coding", "Fast Loading Speed", "Mobile-First Design", "Clean UI/UX", "Scalable Architecture"].map((item, i) => (
                 <div key={i} className="p-6 bg-[#2d3d2a] border border-white/5 text-center rounded-xl hover:border-neon/30 transition-all shadow-lg group">
                    <span className="text-neon text-xs font-bold tracking-widest uppercase group-hover:scale-110 block transition-transform">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO Boost Section */}
      <section className="py-24 bg-[#233021]">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-black mb-10 leading-none uppercase text-white italic">SEO Boost for Every <span className="text-neon">Business</span></h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16 text-lg">
               Our portfolio projects are designed using the latest web development standards and SEO best practices. This ensures better Google ranking, improved user experience, and higher conversion rates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {["Optimized Code", "Fast Page Speed", "Mobile Response", "Keyword Optimized"].map((item, i) => (
                 <div key={i} className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full border border-neon/30 flex items-center justify-center text-neon font-black mb-4 group-hover:bg-neon group-hover:text-black transition-all duration-500 shadow-xl shadow-neon/5">0{i+1}</div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-neon transition-colors">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-[#2d3d2a] relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(189,242,74,0.03)_0%,_transparent_70%)]" />
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-none max-w-2xl mx-auto text-white italic">Ready to turn your idea into <span className="text-neon">reality?</span></h2>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/contact" className="px-12 py-5 bg-neon text-black font-black uppercase tracking-widest text-sm hover:scale-110 hover:-rotate-2 transition-all shadow-2xl shadow-neon/20">Start Your Project</Link>
               <Link href="/contact" className="px-12 py-5 border-2 border-neon text-neon font-black uppercase tracking-widest text-sm hover:bg-neon hover:text-black transition-all">Contact Us</Link>
            </div>
         </div>
      </section>
    </main>
  );
}
