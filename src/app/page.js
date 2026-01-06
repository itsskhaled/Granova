import HeroPage from "./HeroPage/page";
import NavBar from "./NavBar/page";
import YourFaces from "./YourFaces/page";
import TypesGran from "./TypesGran/page";
import WhyGranova from "./WhyGranova/page";
import FooterJSX from "./Components/FooterJSX";

export const metadata = {
  title: {
    default: "جرانوفا | جرانولا طبيعية بطعم لا يقاوم",
    template: "%s | جرانوفا",
  },

  description:
    "جرانوفا تقدم لك جرانولا طبيعية 100% مصنوعة من مكونات عالية الجودة بدون سكر مكرر أو مواد حافظة. فطور صحي، طعم غني، وجودة عالية لكل يومك.",

  keywords: [
    "جرانولا",
    "جرانولا صحية",
    "جرانولا طبيعية",
    "فطور صحي",
    "جرانوفا",
    "granola",
    "healthy granola",
    "organic granola",
    "breakfast healthy",
    "جرانولا بدون سكر",
    "جرانولا بدون مواد حافظة",
  ],

  authors: [{ name: "Granova Store" }],
  creator: "Granova",
  publisher: "Granova",

  metadataBase: new URL("https://www.granova.com"), // عدّل الرابط

  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
    },
  },

  openGraph: {
    title: "جرانوفا | جرانولا طبيعية 100%",
    description:
      "استمتع بجرانولا طبيعية 100% بدون سكر مكرر أو مواد حافظة. طعم غني وجودة عالية لفطور صحي.",
    url: "https://www.granova.com", // عدل الرابط
    siteName: "Granova",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "جرانوفا - جرانولا طبيعية 100%",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "food",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <YourFaces />
      <TypesGran />
      <WhyGranova />
      <FooterJSX />
    </>
  );
}
