import "@/styles/globals.css";
import { Metadata } from 'next';
import Layout from "./Layout";
 
export const metadata: Metadata = {
  name: "apple-mobile-web-app-capable",
  content: "yes",	
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
