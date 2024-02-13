import React from 'react';

const Story = () => {
    
    const headerText = "BONOとは";
    const h1Text = "自分自身のアイデアを\n構想し、設計し、構築し、人に届ける\nあなたにとっての\nクリエイションの夜明けを。";
    const divText = "BONOの看板である「ロードマップ」を、まだ不完全ながらも強化した年と言えます。多くを行うよりも、まずはサービスとしての価値を一つ確固たるものにすることが正しいと判断しました。これ自体自分も正しいと感じています。\nしかし、自信を持って世に出せたという感覚はありません。個人的な問題かもしれませんが、「必要なものを揃える」という点に集中し、自分なりに本当に良いものを作り出す感覚が強まりました。この感覚はサービス開始初期からあり、”とにかく使えるものを作る”にフォーカスしていた結果だと思います。（その証拠に、Twitterで新しく作ったコンテンツを自分からシェアしていません。自信のなさの表れです）\n\n結果的には合理的に選んできたことに対し、『自分の気持ち』が伴わない結果になりました。数字は伸びるかもしれませんが、心は死んでいます。やる人がいなくなれば、サービスは止まります。どれだけ結果が出ていても止まってしまった瞬間、全てが終わりになります。これは合理的に見えて不合理な選択をしてきた結果だと考えています";
    
    const textStrokeStyle = {
        WebkitTextStroke: "1px #F2FF5F", // 枠線の太さと色
        color: "transparent", // 文字の中身を透明
      };    
    const bgStoryColor = {
        backgroundColor: "#343E43", // 文字の中身を透明にするのではなく、背景色を設定
    };

    return (
        <div className="px-8 w-full bg-gray-800 flex-col font-black justify-start items-center inline-flex" style={bgStoryColor}>
            <div className="text-white flex flex-col w-full md:max-w-[560px]  gap-8  mt-32 text-base font-bold leading-7 tracking-wider ">
                <div className='flex gap-4 flex-col md:max-w-[560px] '>
                    <div class="text-base font-bold leading-none tracking-[4px]" style={textStrokeStyle}>CONCEPT</div>
                    <h1 className="text-white text-2xl lg:text-3xl font-medium leading-[2.8rem] lg:leading-[3.6rem] tracking-wide">
                        {h1Text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                    </h1>
                </div>
                
                <div class="text-white text-opacity-80 text-base font-medium leading-[38.40px] tracking-wide">
                    {divText.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                </div>

                <div class="w-full justify-between items-end inline-flex">
                    <img class="w-[47px] h-[47px] origin-top-left" src="https://via.placeholder.com/47x47" />
                    <img class="w-[272px] h-[138px]" src="https://via.placeholder.com/272x138" />
                 </div>
            </div>
        </div>
    );
}

export default Story;