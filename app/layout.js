import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MHS Tech | Best Software House in Karachi",
  description: "MHS Tech is a leading software house in Karachi offering web development, SEO, graphic design, video editing, and custom software solutions.",
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
