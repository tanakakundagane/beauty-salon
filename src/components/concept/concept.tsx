export function Concept() {
  return (
    <section className="relative py-32 bg-[#F5F5F1] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 背景の円とドット */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F8E4DD] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute top-20 right-40 w-32 h-32">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* 装飾的な葉のイラスト */}
        <div className="absolute bottom-20 left-40">
          <div className="w-32 h-48 border-2 border-white rounded-full transform -rotate-45" />
        </div>

        {/* コンテンツ */}
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-12">Concept</h2>
          <h3 className="text-2xl mb-12 leading-relaxed">
            「ピュアな花と植物エッセンスから生まれた美と科学」
            <br />
            を実践するアヴェダ。
          </h3>
          <p className="text-base leading-relaxed text-gray-700 space-y-6">
            植物が持つ溢れるほどの生命力を科学的に研究してその高い効果に着目し、
            <br />
            「あなたのためのケア」をご提案します。アヴェダのヘアケア、スキンケア、ライフスタイルなどの製品は、
            <br />
            高い効果だけでなく、地球環境にも深く配慮しています。
          </p>
        </div>
      </div>
    </section>
  );
}
