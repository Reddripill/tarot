import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import "./globals.scss";

export const metadata: Metadata = {
   title: "Tarot",
   description: "Tarot App",
};

const inter = Inter({
   subsets: ["cyrillic"],
   display: "swap",
   variable: "--font-inter",
});

const exo2 = Exo_2({
   subsets: ["cyrillic"],
   weight: "400",
   display: "swap",
   variable: "--font-exo",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru" className={`${inter.variable} ${exo2.variable}`}>
         <body>
            <div className="wrapper">
               <Header />
               <main className="main">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
