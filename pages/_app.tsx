import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
