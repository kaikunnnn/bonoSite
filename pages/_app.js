import SEO from "@/components/SEO";
import "@/styles/globals.css";
import "@/styles/bg-category.css";
import FooterBlock from "@/components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (<>
    <SEO 
      title="東京で個人開発する1人デザイナーの日常 | BONOブログ" 
      description="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。" 
      imgUrl="https:kaikun.bo-no.blog/ogp-bonoblog.jpg"
      ogTitle="東京で個人開発する1人デザイナーの日常 | BONOブログ"
      ogDescription="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。"
      ogWidth='1200'
      ogHeight="600">
    </SEO>
    <div className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
      <Component {...pageProps} />
      <FooterBlock />
    </div>
 </>);
}
export default MyApp;
