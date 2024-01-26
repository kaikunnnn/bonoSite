import React from 'react';

const Purpose = () => {
    const headerClass = "text-white text-opacity-80 text-base leading-7 tracking-wider self-start max-md:max-w-full max-md:mt-10";
    const h1Class = "text-white text-3xl font-bold leading-10 tracking-wider max-w-[556px] self-start max-md:max-w-full";
    const divClass = "text-white text-opacity-80 text-base font-bold leading-7 tracking-wider w-[1019px] max-w-full  max-md:my-10";

    const headerText = "BONOとは";
    const h1Text = "自分自身のアイデアを\n構想し、設計し、構築し、人に届ける\nあなたにとっての\nクリエイションの夜明けを。";
    const divText = "BONOの看板である「ロードマップ」を、まだ不完全ながらも強化した年と言えます。多くを行うよりも、まずはサービスとしての価値を一つ確固たるものにすることが正しいと判断しました。これ自体自分も正しいと感じています。\nしかし、自信を持って世に出せたという感覚はありません。個人的な問題かもしれませんが、「必要なものを揃える」という点に集中し、自分なりに本当に良いものを作り出す感覚が強まりました。この感覚はサービス開始初期からあり、”とにかく使えるものを作る”にフォーカスしていた結果だと思います。（その証拠に、Twitterで新しく作ったコンテンツを自分からシェアしていません。自信のなさの表れです）\n\n結果的には合理的に選んできたことに対し、『自分の気持ち』が伴わない結果になりました。数字は伸びるかもしれませんが、心は死んでいます。やる人がいなくなれば、サービスは止まります。どれだけ結果が出ていても止まってしまった瞬間、全てが終わりになります。これは合理的に見えて不合理な選択をしてきた結果だと考えています";

    return (
        <div className="justify-center gap-8 items-center self-stretch bg-neutral-900 flex flex-col p-32 max-md:px-5">
            <div className={divClass}>
                <header className={headerClass}>
                    {headerText}
                </header>
                <h1 className={h1Class}>
                    {h1Text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                </h1>
            </div>
            <div className={divClass}>
                {divText.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
            </div>
        </div>
    );
}

export default Purpose;