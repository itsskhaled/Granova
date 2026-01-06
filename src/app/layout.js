import { Changa, Marhey } from "next/font/google";
import "./globals.css";

export const changa = Changa({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const marhey = Marhey({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
