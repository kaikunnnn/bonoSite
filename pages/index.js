import { Inter } from "next/font/google";
import { createClient } from "contentful";
import { motion, Variants  } from "framer-motion"

// Newt
import { getArticles } from "@/libs/newt";

// Components
import Header from "@/components/layout/Header";
import ArticleCard from "@/components/EpisodeCard";
import EpisodeCard from "@/components/EpisodeCard";
import TitleSection from "@/components/element/TitleSection";
import SunTop from "@/components/element/SunTop";
import FooterBlock from "@/components/layout/Footer";
import TopHero from "@/components/element/TopHero";
import Link from "next/link";

// Framer Motion
const ullist = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
        staggerChildren: 0.48,
        delay:0.24,
    },
  },
}

// Get the contentful data
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "article" });

  // Fetch articles from Newt
  const articles = await getArticles();
  console.log('Newt Articles:', articles); // コンソールに出力


  return {
    props: {
      article: res.items,
      newtArticles: articles, 
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ article,newtArticles }) {
  console.log('Newt Articles in Component:', newtArticles); // コンポーネント内での出力
  return (
    <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
      
      <Header />
      <SunTop />
      <div className="HomeEyecatch w-full flex justify-center pt-20 mb-12">
        <TopHero />
      </div>
      {
        newtArticles.map(article => (
          <div key={article._id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </div>
        ))
      }

      {/* Article List from Contentful*/}
      <div className="Article m-auto w-7/12 grid text-center lg:mb-0  lg:text-left">
        <TitleSection />
        <motion.ul
          className="flex-col flex gap-3"
          variants={ullist}
          initial="hidden"
          animate="show"
        >
          {article.map((article) => (
            <EpisodeCard key={article.sys.id} article={article} />
          ))}
        </motion.ul>
      </div>
      <FooterBlock />
    </main>
  );
}
