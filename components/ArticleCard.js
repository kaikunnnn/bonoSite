import Image from "next/image"
import Link from "next/link"

export default function ArticleCard({article}){
    
    const{title, slug, timetoFinish, thumbnail} = article.fields

    return(
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:'+ thumbnail.fields.file.url} 
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    alt={thumbnail.title}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p >Takes {timetoFinish} mins to design.</p>
                </div>
            </div>
            <div className="actions">
                <Link href={'/content/' + slug }>Cook this.</Link>
            </div>
        </div>
    )
}