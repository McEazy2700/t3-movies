import React from "react";
import { AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux";
import "../styles/globals.css";
import { queryClient } from "../utils/query";
import store from "@utils/store";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextPage } from "next";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  session: Session | null
}

const MyApp = ({ Component, pageProps: { session, ...pageProps }}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)
  const rounter = useRouter()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity:0  }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: {duration: 0.1 } }}
              key={rounter.route}
              className="bg-gradient-to-b overflow-auto max-w-screen min-w-screen min-h-screen from-dark-1 to-dark-2 text-light-1">
              {getLayout(<Component {...pageProps} />)}
              <Analytics />
            </motion.div>
          </AnimatePresence>
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
