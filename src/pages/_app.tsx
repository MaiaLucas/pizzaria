import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Theme from "../core/Theme";
import LayoutMain from "../components/LayoutMain";
import Header from "../components/Header";
import { SidebarConsumer } from "../core/context/SidebarContext";
import { AlertConsumer } from "../core/context/AlertContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <SidebarConsumer>
        <Header />
        <LayoutMain>
          <AlertConsumer>
            <Component {...pageProps} />
          </AlertConsumer>
        </LayoutMain>
      </SidebarConsumer>
    </ThemeProvider>
  );
}

export default MyApp;
