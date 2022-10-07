import Layout from "../components/layout/layout";
import "../styles/main.scss";
import "../styles/globals.scss"; 
import { SSRProvider } from "react-aria"; 

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider> 
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </SSRProvider>
  );
} 