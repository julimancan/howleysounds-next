import BlockContent from "@sanity/block-content-to-react"

const TextContent = ({content}) => {
  return (
    <BlockContent
      blocks={content}
    />
      
  )
}

export default TextContent;
