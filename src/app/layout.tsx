import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import "./globals.scss";
import { keywords } from "@/constants/keywords";
import Head from "next/head";

const title = "Магический круг Таро";
const description = `Что такое Таро? Где записаться на разбор Таро? Елена разберет вашу натальную карту. 
      Раскройте тайны будущего и найдите ответы на важные вопросы.`;

export const metadata: Metadata = {
   title,
   description,
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
         <Head>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/mainBg.wepb" />
            <meta property="og:url" content={"https://elena-tarot.ru/"} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
         </Head>
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
