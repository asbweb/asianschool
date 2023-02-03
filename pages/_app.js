import Layout from "../components/layout/layout";
import "../styles/main.scss";
import "../styles/globals.scss";
import { SSRProvider } from "react-aria";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <SSRProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {}
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </SSRProvider>
  );
}
