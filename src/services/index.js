import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLICK_GRAPHCMS;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        id
        title
        slug
        postCover {
          url
        }
        excerpt
        createdAt
        authors {
          name
        }
        cover
      }
    }
  `;
  console.log(graphqlAPI);
  const results = await request(graphqlAPI, query);
  return results.posts;
};
