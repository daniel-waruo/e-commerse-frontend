import { gql } from 'apollo-boost';

export const PRODUCT_QUERIES = gql`
query {
  allProducts(slug : "fish",first:1) {
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
      }
    }
  }
}
`;