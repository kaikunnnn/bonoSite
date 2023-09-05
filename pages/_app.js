import SEO from "@/components/SEO";
import "@/styles/globals.css";
import "@/styles/bg-category.css";
import FooterBlock from "@/components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (<>
    <SEO 
      title="荻窪で個人開発する1人デザイナーの日常 | BONOブログ" 
      description="テストのディスクリプション" 
      imgUrl="https:kaikun.bo-no.blog/ogp-bonoblog.jpg"
      ogTitle="荻窪で個人開発する1人デザイナーの日常 | BONOブログ"
      ogDescription="UI/UXの動画コンテンツコミュニティ「BONO」を運営するカイクンの個人ブログです。"
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
