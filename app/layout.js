import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AmhexAfrica",
  description: "Mental Health Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen antialiased bg-gray-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
