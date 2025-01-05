import "../styles/globals.css";
import Layout from "@layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AppProps } from "next/app";
import { AnimationProvider } from '../context/AnimationContext';
import { useAnimationContext } from '../context/AnimationContext';
import { NextRouter } from "next/router";

NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  // Wrap the entire return in AnimationProvider
  return (
    <AnimationProvider>
      <LayoutWithAnimation router={router} pageProps={pageProps} Component={Component} />
    </AnimationProvider>
  );
}

// Create a new component that can use the context
function LayoutWithAnimation({ router, pageProps, Component }: { router: NextRouter, pageProps: any, Component: React.ComponentType<any> }) {
  const { animationComplete } = useAnimationContext(); // Now safely within the provider

  return (
    <Layout showFooter={router.asPath === "/" ? animationComplete : true}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
