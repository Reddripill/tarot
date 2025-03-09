import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import "./globals.scss";

export const metadata: Metadata = {
   title: "Магический круг Таро",
   description: "Раскройте тайны будущего и найдите ответы на важные вопросы",
};

const inter = Inter({
   subsets: ["cyrillic"],
   display: "swap",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru" className={`${inter.className}`}>
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
