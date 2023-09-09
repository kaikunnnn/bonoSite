import SEO from "@/components/SEO";
import "@/styles/globals.css";
import "@/styles/bg-category.css";
import FooterBlock from "@/components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (<>
    <div className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
      <Component {...pageProps} />
      <FooterBlock />
    </div>
 </>);
}
export default MyApp;
