import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: " %s Info Hub",
    default: "WorldView: Country Info Hub"
  },
  description: "WorldView is a dynamic country information platform that aggregates essential details such as country demographics, population statistics, and national flags. By combining data from multiple sources, users can access detailed information about countries worldwide. Whether you're a traveler, student, or geography enthusiast, WorldView provides quick insights into countries' flags, population trends, and regional details in a user-friendly interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#1A232A]`}
      >
        {children}
      </body>
    </html>
  );
}
