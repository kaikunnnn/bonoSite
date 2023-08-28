import { VFC } from 'react'
import Head from 'next/head'

function SEO({title,description,imgUrl,ogTitle,ogDescription,ogWidth,ogHeight}) {
  return (
    <Head>
       <title>{title}</title>
       <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:url" content="https://kaikun.bo-no.design" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:site_name" content="BONO BLOG" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={ogWidth} />
      <meta property="og:image:height" content={ogHeight}/>
      <link rel="icon" href="https://kaikun.bo-no.design/favicon.ico" sizes="any"></link>
    </Head>
  )
}

export default SEO
