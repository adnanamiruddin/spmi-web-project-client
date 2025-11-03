import "@/styles/globals.css";
import "@/styles/loading.css";

import MainLayout from "@/components/MainLayout";
import { Provider } from "react-redux";
import store from "@/redux/store";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress-custom.css";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleDone);
    Router.events.on("routeChangeError", handleDone);

    NProgress.start();
    NProgress.done();

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleDone);
      Router.events.off("routeChangeError", handleDone);
    };
  }, []);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
