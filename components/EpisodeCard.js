import Image from "next/image";
import Link from "next/link";

export default function EpisodeCard({ article }) {
  const { title, slug, timetoFinish, thumbnail } = article.fields;
  
  return (
    <Link href={"/content/" + slug} className="hover:opacity-80">
      <div className="Itemepisode w-full py-8 border-b border-neutral-200 flex-col justify-start items-start gap-5 inline-flex">
        <div className="Wrapper self-stretch justify-start items-center gap-8 inline-flex">
          <div className="Rightblock w-40 h-40 justify-start items-start gap-2.5 flex">
            <Image
              className="Rectangle1 grow shrink basis-0 self-stretch rounded-lg shadow-xl"
              src={"https:" + thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
              alt={thumbnail.title}
            />
          </div>
          <div className="Lefttextblock grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
            <div className=" self-stretch text-gray-900 text-2xl font-bold leading-7 tracking-wide">
              <h4>{title}</h4>
            </div>
            {/* Detail Episode */}
            <div className="Frame10 self-stretch justify-start items-start gap-2 inline-flex">
              <div className="1212 text-black text-md font-normal leading-snug tracking-wide">
                2023.12.12
              </div>
              <div className=" text-black text-md font-normal leading-snug tracking-wide">
                ・
              </div>
              <div className="56 text-black text-md font-normal leading-snug tracking-wide">
                {timetoFinish}分
              </div>
            </div>

          </div>
        </div>
        <div className="Frame30 self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="Dubhunter self-stretch text-gray-500 text-lg font-normal leading-snug tracking-wide">
            今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter
            と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
          </div>
          <div className=" text-blue-500 text-md font-normal leading-snug tracking-wide">
            {/* <Link href={"/content/" + slug}>詳細へ</Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
