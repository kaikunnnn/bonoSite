import Link from 'next/link';
import CardStance from '../ui/stance/cardStance';

const MenuToggle = ({ contents }) => {

  return (
    <>
        <div className="Menu ">
          <div>
            <h2 className='text-center mb-12 text-lg'>スタンス一覧</h2>
          </div>
       
          <div className='flex flex-col gap-6'>
          <CardStance
              
              stanceNumber='スタンス01'
              mainTitle="あったらいいなをつくる人を増やす"
              chapterDescription="チャプターの説明"
              listItems={[
                { title: 'リストアイテム1',emoji:'✌️', description: '説明1', url: `/about/${contents[0].slug}` },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
            <CardStance
              stanceNumber='スタンス01'
              mainTitle="あったらいいなをつくる人を増やす"
              chapterDescription="チャプターの説明"
              listItems={[
                { title: 'リストアイテム1', description: '説明1', url: `/about/${contents[0].slug}` },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
            <CardStance
              stanceNumber='スタンス01'
              mainTitle="あったらいいなをつくる人を増やす"
              chapterDescription="チャプターの説明"
              listItems={[
                { title: 'リストアイテム1', description: '説明1', url: `/about/${contents[0].slug}` },
                { title: 'リストアイテム2', description: '説明2', url: 'https://example.com/2' },
                // 他のリストアイテム...
              ]}
            />
          </div>
          
        </div>
        
      
    </>
  );
};

export default MenuToggle;