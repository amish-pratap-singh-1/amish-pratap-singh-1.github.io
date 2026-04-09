import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground`}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </div>
  );
}
