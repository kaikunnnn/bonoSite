import React from 'react';
import CardStance from '../ui/stance/cardStance';
import TitleSection from '@/components/common/layout/TitleSection';
import StanceSectionTitle from '../ui/stance/TitleSection';

const Stance = () => {
    return (
      <div className="flex flex-col py-24" style={{ backgroundColor: '#F3F2EE' }}>
        <div className='mx-auto flex flex-col gap-12 lg:gap-16'>
          <StanceSectionTitle></StanceSectionTitle>
          <div className='flex flex-col gap-6'>
            <CardStance 
              stanceNumber='スタンス01'
              mainTitle={<><span>あったらいいなを<br></br>つくる人を増やす</span></>}
              chapterDescription="ここにチャプターのいい感じの説明がやってくる"
              listItems={[
                { title: 'リストアイテム1', description: '説明1', url: 'https://example.com/1' },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
              <CardStance 
              stanceNumber='スタンス01'
              mainTitle="あったらいいなをつくる人を増やす"
              chapterDescription="チャプターの説明"
              listItems={[
                { title: 'リストアイテム1', description: '説明1', url: 'https://example.com/1' },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
              <CardStance 
              stanceNumber='スタンス01'
              mainTitle="あったらいいなをつくる人を増やす"
              chapterDescription="チャプターの説明"
              listItems={[
                { title: 'リストアイテム1', description: '説明1', url: 'https://example.com/1' },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
          </div>
          
        </div>
    </div>
    );
}

export default Stance;