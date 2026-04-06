import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Amish Pratap Singh</title>
        <meta name="description" content="Portfolio of Amish Pratap Singh" />
      </Head>
      <Hero />
      <Experience />
      <Skills />
      <Education />
    </Layout>
  );
}
