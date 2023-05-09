import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutComponent from "@/layout";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
