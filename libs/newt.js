import { createClient } from 'newt-client-js'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  try {
    const { items } = await client.getContents({
      appUid: 'blog',
      modelUid: 'article',
      query: {
        select: [],
      },
    })
    return items
  } catch (err) {
    console.error("Error fetching articles:", err);
    return [];
  }
}

export const getArticleBySlug = async (slug) => {
    try {
      const article = await client.getFirstContent({
        appUid: 'blog',
        modelUid: 'article',
        query: {
          slug,
          select: [],
        },
      });
      return article;
    } catch (err) {
      console.error('Error fetching article by slug:', err);
      return null;
    }
};