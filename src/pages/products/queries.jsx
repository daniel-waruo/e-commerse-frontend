import gql from "graphql-tag";

export const PRODUCTS_QUERY = gql`
{
  allProducts {
    edges {
      node {
          id
          name
          price
          discountPrice
          description
          images {
            image
          }
          slug
      }
    }
  }
}

`;