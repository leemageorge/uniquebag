import {Nata_Sans} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import CustomCursor from "./components/CustomCursor";

const nata_sans = Nata_Sans({
  variable: "--font-nata-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Unique Bags",
  description: "Uniquely Yours",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nata_sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <Header />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        </body>
    </html>
  );
}
