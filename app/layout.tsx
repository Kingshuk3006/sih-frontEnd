import "./globals.css";
import { Holtwood_One_SC } from "next/font/google";
import { Hammersmith_One } from "next/font/google";
import { Providers } from "./providers";
import Head from "next/head";

const holtwood = Holtwood_One_SC({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const hammersmith = Hammersmith_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DERMACURE.AI",
  description: "Made by team SIX-BYTE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />{" "}
      </Head>
      <div className={hammersmith.className}>
        {" "}
        <Providers>{children}</Providers>
      </div>
    </html>
  );
}
