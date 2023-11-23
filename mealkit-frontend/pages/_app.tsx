import Layout from "../components/SellerWeb/Layout";
import "./globals.css";

function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
