import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLICK_GRAPHCMS;

export const getPosts = async () => {
  const query = gql`
    query getPosts {
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
          photo {
            url
          }
        }
        cover
        categories {
          title
        }
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
          photo {
            url
          }
        }
        categories {
          slug
        }
        cover
      }
    }
  `;
  const results = await request(graphqlAPI, query, { slug });
  return results.post;
};

export const getAuthor = async () => {
  const query = gql`
    query author {
      authors {
        name
        bio
        photo {
          url
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results.authors;
};

export const getSimilarPosts = async (slug) => {
  const query = gql`
    query getSimilarPosts($slug: String!) {
      categoriesConnection(where: { slug: $slug }) {
        edges {
          node {
            id
            posts {
              id
              slug
              createdAt
              title
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });
  if (results.categoriesConnection.edges.length > 0) {
    return results.categoriesConnection.edges[0].node.posts;
  } else {
    return [];
  }
};
