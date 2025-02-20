import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CourseContent() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-[#FFF5F2] rounded-3xl">
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="text-sm  tracking-wide mb-4">UI/UX Design Course</div>

          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            UIUXデザイナー転職コース
          </h3>

          <p className=" mb-8 leading-relaxed">
            ロードマップに沿って、現場デザイナーに必須の「3つの基礎」を身につけます。
          </p>

          <Button
            variant="outline"
            className="group text-gray-800 border-gray-300 hover:bg-gray-50/80 transition-all duration-300"
          >
            コース詳細へ
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="h-[300px] lg:h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="UI/UX Design Course"
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 right-0 w-full h-1/2">
                      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-purple-400/20 to-transparent transform skew-y-6"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
                  </div>
                </div>
                <div className="relative h-full flex flex-col justify-center p-8 lg:p-12">
                  <div className="space-y-4">
                    <h4 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      UI/UX
                    </h4>
                    <p className="text-xl lg:text-2xl text-white/90">
                      ロードマップコース
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
