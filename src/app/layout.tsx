import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import "./globals.scss";
import { keywords } from "@/constants/keywords";

const title = "Магический круг Таро";
const description = `Что такое Таро? Где записаться на разбор Таро? Елена разберет вашу натальную карту. Раскройте тайны будущего и найдите ответы на важные вопросы.`;

export const metadata: Metadata = {
   title,
   description,
   icons: {
      icon: "/favicon.ico",
   },
   keywords: keywords,
   openGraph: {
      title,
      description,
      images: {
         url: "https://elena-tarot.ru/tarot-circle.webp",
      },
      url: "https://elena-tarot.ru/",
      siteName: "elena-tarot.ru",
      type: "website",
   },
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
