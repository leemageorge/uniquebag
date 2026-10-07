import {Nata_Sans} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import CustomCursor from "./components/CustomCursor";
import FloatingScrollArrow from "./components/FloatingScrolling";

const nata_sans = Nata_Sans({
  variable: "--font-nata-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Bag Manufacturer in Kuthiyathode,Chammanadu, Cherthala, Kerala | Unique Bags",

  description:
     "Bag manufacturer in Kuthiyathode, Chammanadu, Cherthala, Kerala, offering travel bags, instrument bags, camera bags, delivery bags, college bags, Mridangam bags and Tabla bags.",

 keywords: [
  "bag manufacturer in Kuthiyathode",
  "bag manufacturer in Chammanadu",
  "bag manufacturer in Cherthala",
  "bag manufacturer in Kerala",
  "bag manufacturers in Kerala",
  "travel bag manufacturer in Kuthiyathode",
  "travel bag manufacturer in Chammanadu",
  "travel bag manufacturer in Cherthala",
  "travel bag manufacturer in Kerala",
  "instrument bag manufacturer in Kuthiyathode",
  "instrument bag manufacturer in Chammanadu",
  "instrument bag manufacturer in Cherthala",
  "instrument bag manufacturer in Kerala",
  "musical instrument bag manufacturer in Kuthiyathode",
  "musical instrument bag manufacturer in Chammanadu",
  "musical instrument bag manufacturer in Cherthala",
  "musical instrument bag manufacturer in Kerala",
  "camera bag manufacturer in Kuthiyathode",
  "camera bag manufacturer in Chammanadu",
  "camera bag manufacturer in Cherthala",
  "camera bag manufacturer in Kerala",
  "delivery bag manufacturer in Kuthiyathode",
  "delivery bag manufacturer in Chammanadu",
  "delivery bag manufacturer in Cherthala",
  "delivery bag manufacturer in Kerala",
  "college bag manufacturer in Kuthiyathode",
  "college bag manufacturer in Chammanadu",
  "college bag manufacturer in Cherthala",
  "college bag manufacturer in Kerala",
  "Mridangam bag manufacturer in Kuthiyathode",
  "Mridangam bag manufacturer in Chammanadu",
  "Mridangam bag manufacturer in Cherthala",
  "Mridangam bag manufacturer in Kerala",
  "Tabla bag manufacturer in Kuthiyathode",
  "Tabla bag manufacturer in Chammanadu",
  "Tabla bag manufacturer in Cherthala",
  "Tabla bag manufacturer in Kerala",
  "custom bag manufacturer in Kuthiyathode",
  "custom bag manufacturer in Chammanadu",
  "custom bag manufacturer in Cherthala",
  "custom bag manufacturer in Kerala",
]

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
        <FloatingScrollArrow />
        <FloatingWhatsApp />
        </body>
    </html>
  );
}
