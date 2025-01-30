"use client";

const interviews = [
  {
    id: 1,
    name: "Boi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    title: "広報からUI/UXデザイナーへ未経験転職",
    tags: ["未経験からUI/UX職への転職"],
    company: "制作会社"
  },
  {
    id: 2,
    name: "Tara",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    title: "働きながら独学！上手に時間を持つ勉強法を聞いた",
    tags: ["未経験からUI/UX職への転職"],
    company: "UI/UXデザイン会社"
  },
  {
    id: 3,
    name: "りんねる",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop",
    title: "広報・PR企業からUI/UXデザイナーに転職した話",
    tags: ["未経験からUI/UX職への転職"],
    company: "制作会社"
  },
  {
    id: 4,
    name: "Kana",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    title: "子育てしながらUI/UXデザイナーへ未経験転職",
    tags: ["未経験からUI/UX職への転職"],
    company: "UI/UXデザイン会社"
  }
];

const duplicatedInterviews = [...interviews, ...interviews];

function InterviewCard({ interview }) {
  return (
    <a 
      href={`/interviews/${interview.id}`}
      className="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={interview.avatar}
          alt={interview.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/80 text-sm mb-2">
            {interview.company}
          </div>
          <div className="flex gap-2">
            {interview.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 rounded-full bg-white/20 text-white text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {interview.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            {interview.name}
          </span>
          <span className="text-xs text-gray-500">
            さん
          </span>
        </div>
      </div>
    </a>
  );
}

export default function InterviewSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container px-4 ">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 text-sm font-medium text-indigo-600 tracking-wide">
            BONO利用者の声
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            未経験からUIUXデザイナーになった人について
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            "デザインはオリジナリティを発揮するもの。と思い込んではいけません。
            まずは世の中の良いものに目を向けて"定番"の表現を吸収していくのです"
          </p>

          <div className="inline-block">
            <a 
              href="/interviews"
              className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-colors duration-300"
            >
              転職者インタビューを見る
            </a>
          </div>

          
        </div>
        <div className="relative w-full overflow-hidden mt-12">
          <div 
            className="flex gap-6"
            style={{
              animation: 'scroll 30s linear infinite',
              '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' }
              }
            }}
          >
            {duplicatedInterviews.map((interview, index) => (
              <div key={`${interview.id}-${index}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                <InterviewCard interview={interview} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}