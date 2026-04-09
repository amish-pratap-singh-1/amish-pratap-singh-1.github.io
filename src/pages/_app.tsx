import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto, JetBrains_Mono } from "next/font/google";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className={`${roboto.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground`}>
        <Layout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
