import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "./PreviewSuspense";
import PreviewBlogList from "./PreviewBlogList";
import BlogList from "./BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories->[]
  } | order(_createdAt desc)
`;

async function Posts() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center animate-pulse text-lg text-red-500">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);

  return <BlogList posts={posts} />;
}

export default Posts;
