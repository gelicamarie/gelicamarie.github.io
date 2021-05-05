import { graphql, useStaticQuery } from 'gatsby'
import { Helmet, HelmetProps } from 'react-helmet'

type SeoProps = {

  /**
   * Title of the object
   */
  title: string,

  /**
   * A one to two sentence description.
   */
  description?: string,

  /**
   * Language of page
   * Default: en
   */
  lang?: string,

  /**
   * List of keywords helps to search content helps search engines
   */
  keywords?: [string],
} & HelmetProps

const Seo = ( { description, meta = [], lang = 'en', keywords, title, ...props }:SeoProps ) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoMetadataQuery>( graphql`
    query SeoMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
  ` )

  const metaDescription = description || site?.siteMetadata?.description
  const metaTitle = site?.siteMetadata?.title || title

  const metaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ] as HelmetProps['meta']

  const keywordTag = keywords && keywords.length > 0 ? {
    name: 'keywords',
    content: keywords.join( ', ' ),
  } : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={metaTags?.concat( meta ).concat( keywordTag )}
      {...props}
    />
  )
}

export default Seo
