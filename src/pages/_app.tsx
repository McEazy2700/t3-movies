import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux";
import "../styles/globals.css";
import { queryClient } from "../utils/query";
import store from "@utils/store";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="bg-gradient-to-b from-dark-1 to-dark-2 text-light-1">
            <Component {...pageProps} />
          </div>
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
