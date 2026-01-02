import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  title: "John Maliwa | Web Developer & Tech Enthusiast",
  description:
    "Hi, I'm John Maliwa, a web developer and tech enthusiast from Tanzania. I build websites, apps, and digital solutions, while studying Industrial Engineering at the University of Dar es Salaam.",
  author: "John Maliwa",
  siteUrl: "https://www.johnmaliwa.my.id",
  applicationName: "John Maliwa Portfolio",
  keywords: [
    "John Maliwa",
    "web developer Tanzania",
    "industrial engineering student",
    "JavaScript",
    "Next.js",
    "React",
    "web development portfolio",
    "tech enthusiast",
    "disihub",
    "smartstoo",
    "ezymarket",
  ],
  openGraph: {
    type: "website",
    url: "https://www.jm.disihub.site",
    title: "John Maliwa | Web Developer & Tech Enthusiast",
    site_name: "John Maliwa Portfolio",
    description:
      "Portfolio of John Maliwa – web developer and tech enthusiast from Tanzania, showcasing projects, apps, and skills.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "John Maliwa Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}

        {/* Floating contact button visible on all pages */}
        <FloatingContactButton />

        {/* <Analytics /> */}
      </body>
    </html>
  );
}
