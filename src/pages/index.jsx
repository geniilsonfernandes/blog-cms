import { GridHome } from "../components/Layout/GridHome";
import { getAuthor, getPosts } from "../services";
import { Seo } from "../components/Seo";

export default function Index({ posts, author }) {
  return (
    <>
      <Seo />
      <GridHome posts={posts} author={author[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const posts = await getPosts();
  const author = await getAuthor();
  return {
    props: { posts, author }, // will be passed to the page component as props
  };
};
