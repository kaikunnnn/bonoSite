import SEO from "@/components/SEO";
import "@/styles/globals.css";
import "@/styles/bg-category.css";
import FooterBlock from "@/components/layout/Footer";


import { MemberstackProvider } from "@memberstack/react"
const config = {
   publicKey: "pk_sb_e678216c0d4d2edd4ccf"
}

function MyApp({ Component, pageProps }) {
  return (<>
   <MemberstackProvider config={config}>
      <div className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Component {...pageProps} />
        <FooterBlock />
      </div>
    </MemberstackProvider>
 </>);
}
export default MyApp;
