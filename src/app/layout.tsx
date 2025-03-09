import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import "./globals.scss";
import { keywords } from "@/constants/keywords";

export const metadata: Metadata = {
   title: "Магический круг Таро",
   description: `Что такое Таро? Где записаться на разбор Таро? Елена разберет вашу натальную карту. 
      Раскройте тайны будущего и найдите ответы на важные вопросы.`,
   icons: {
      icon: "/favicon.ico",
   },
   keywords: keywords,
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
