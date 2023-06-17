import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './slug.module.css'



const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

// Generate Paths - 一旦全てのPathを呼び出す
export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
      content_type: "article" 
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: false
    }
}

// Genarate Props - 該当するPathの情報だけ呼び出す
export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
      content_type: 'article',
    //   getStaticPathで呼び出したデータがあるので、params.slugを使うと、現在のページのslugとなる
      'fields.slug': params.slug
    })
  
    return {
      props: { article: items[0] }
    }
  
  }

export default function ContentDetail({article}){
    const {featuredImage,title,timetoFinish,mainText  } = article.fields
    return(
        <div className={styles.detailArticle}>
            <div className='banner'>
                <Image 
                src={'https://' + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
                />
            </div>
            <h2>{title}</h2>
            <div className='info'>
                <p>{timetoFinish}mins to cook</p>
            </div>
            <div className='mainText'>
                {documentToReactComponents(mainText)}
            </div>
        </div>

        
        
    )
}