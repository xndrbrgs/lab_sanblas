type Props = {
  params: {
    slug: string;
  };
};

function Post({params: {slug}}: Props) {
  <div>Post: {slug} </div>;
}

export default Post;
