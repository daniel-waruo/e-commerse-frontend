import { gql } from 'apollo-boost';

export const PRODUCT_QUERIES = gql`
query Product( $productSlug: String! ){
  allProducts(slug : $productSlug ,first:1) {
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