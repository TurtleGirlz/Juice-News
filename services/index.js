import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      category {
        createdAt
        id
        name
        publishedAt
        updatedAt
        posts(orderBy: createdAt_DESC) {
          author {
            facebook
            discord
            description
            createdAt
            id
            instagram
            linkedln
            name
            twitter
            youtube
            featuredImage {
              url
            }
          }
          createdAt
          excerpt
          id
          title
          featuredImage {
            url
          }
          content {
            raw
            text
            html
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result;
};

export const getPostByID = async (id) => {
  console.log("In..!!");
  const query = gql`
    query Category($id: ID) {
      posts(where: { id: $id }) {
        category {
          name
          id
        }
        content {
          html
        }
        featuredImage {
          url
        }
        excerpt
        createdAt
        excerpt
        id
        title
        author {
          description
          discord
          facebook
          instagram
          linkedln
          name
          twitter
          youtube
          featuredImage {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { id });
  return result;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        first: 3
      ) {
        category {
          name
          id
        }
        content {
          html
        }
        featuredImage {
          url
        }
        excerpt
        createdAt
        excerpt
        id
        title
        author {
          description
          discord
          facebook
          instagram
          linkedln
          name
          twitter
          youtube
          featuredImage {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (categories) => {
  console.log(categories);
  const query = gql`
    query GetCategoryPost($categories: String) {
      posts(where: { category_some: { name: $categories } }, last: 3) {
        category {
          name
          id
        }
        content {
          html
        }
        featuredImage {
          url
        }
        excerpt
        createdAt
        excerpt
        id
        title
        author {
          description
          discord
          facebook
          instagram
          linkedln
          name
          twitter
          youtube
          featuredImage {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories });
  return result.posts;
};

export const getPostTitles = async () => {
  const query = gql`
    query MyQuery {
      posts(last: 2000) {
        id
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
