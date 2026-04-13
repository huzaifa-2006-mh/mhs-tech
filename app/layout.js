import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MHS Tech | Premium Software House in Karachi",
  description: "MHS Tech is a leading software house in Karachi specializing in Web Development, SEO Optimization, Graphic Design, and Custom Software Solutions. Elevate your business with our top-tier digital services.",
  keywords: "Software House Karachi, Web Development, SEO Karachi, Graphic Design, Video Editing, MHS Tech, Software Solutions Pakistan",
  authors: [{ name: "MHS Tech" }],
  openGraph: {
    title: "MHS Tech | Premium Software House in Karachi",
    description: "Innovating digital solutions with MHS Tech - Your partner in Web Development and SEO.",
    url: "https://mhs-tech-alpha.vercel.app",
    siteName: "MHS Tech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#2d3d2a] text-white relative overflow-x-hidden`}>
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
