import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "contentful";
import Header from "@/components/layout/Header";
import ArticleCard from "@/components/EpisodeCard";
import EyecatchPodcast from "@/components/layout/EyecatchPodcast";
import EpisodeCard from "@/components/EpisodeCard";
import TitleSection from "@/components/element/TitleSection";

// Get the contentful data
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "article" });

  return {
    props: {
      article: res.items,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ article }) {
  return (
    <main className="min-h-screen flex-col">
      <Header />
      <div className="HomeEyecatch w-full flex justify-center pt-20 mb-12 bg-bgColor-primary ">
        <EyecatchPodcast />
      </div>

      {/* Article List from Contentful*/}
      <div className="m-auto w-7/12 grid text-center lg:mb-0  lg:text-left">
        <TitleSection/>
        {article.map((article) => (
          <EpisodeCard key={article.sys.id} article={article} />
        ))}
      </div>
    </main>
  );
}
