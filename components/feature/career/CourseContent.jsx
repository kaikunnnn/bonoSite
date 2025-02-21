import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CourseContent() {
  return (
    <>
      <Link href="/career/courses/uiux">
        <div className="flex flex-col md:flex-row md:items-center bg-[#FFF5F2] rounded-3xl overflow-hidden hover:opacity-95 transition-all duration-300">
          <div className="w-full md:w-1/2 p-8 md:p-0 md:px-8 flex flex-col justify-normal gap-2">
            <div className="text-xs font-['DotGothic16'] text-green-950 leading-none tracking-wide mb-3">
              UI/UX Design Course
            </div>

            <h3 className="text-2xl md:text-2xl text-green-950 font-medium leading-none ">
              UIUXデザイナー転職コース
            </h3>

            <p className=" mb-4 leading-relaxed text-slate-700">
              ロードマップに沿って、現場デザイナーに必須の「3つの基礎」を習得します。
            </p>

            <Button
              variant="outline"
              className="group text-xs w-fit rounded-full bg-none text-gray-800 border-gray-300 hover:bg-gray-50/80 transition-all duration-300"
            >
              コース詳細へ
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          {/* Image Section */}
          <div className="h-[200px] md:h-auto m-2 md:w-1/2 rounded-xl lg:h-full relative overflow-hidden">
            <img
              src="/career/beginner/uiuxcourse-thumbnail.jpg"
              alt="UI/UX Design Course"
              className=" inset-0  object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
