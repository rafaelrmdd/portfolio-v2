import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/')
    router.prefetch('/projects')
    router.prefetch('/education')
  }, [])

  return <Component {...pageProps} />;
}
