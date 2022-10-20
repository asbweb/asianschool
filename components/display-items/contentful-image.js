import Image from 'next/future/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} alt={title} {...props} />
}

export default ContentfulImage