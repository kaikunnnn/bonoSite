import React from 'react';
import memberstackDOM from "@memberstack/dom";
import { MemberstackProvider } from "@memberstack/react"
const memberstack = memberstackDOM.init({
  publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY,
});
const config = { publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY }


import "@/styles/globals.css";
import "@/styles/bg-category.css";
import FooterBlock from "@/components/layout/Footer";


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
