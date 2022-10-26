import "../../styles/reset.scss";
import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Template Repo</title>
        <meta />
        {/* Uncomment below code for facicon */}
        {/* <link rel="icon" type="image" href="" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Startup template for nextjs project"
        />
      </Head>
      {/* Change Toast Styling */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
