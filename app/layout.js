import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Weather Forecast App By Shreyas Sagar",
  description: "Generated by create shreyas sagar",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
