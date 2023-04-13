import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories->[]
  } | order(_createdAt desc)
`

function Posts() {
  if (previewData()) {
    return <div>Preview data</div>;
  }
  return <div>Not in preview data</div>;
}

export default Posts;
