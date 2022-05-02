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
  const results = await request(graphqlAPI, query);
  return results.posts;
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        postCover {
          url
        }
        content {
          html
        }
        excerpt
        authors {
          name
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query, { slug });
  return results.post;
};
