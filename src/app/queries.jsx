import {gql} from 'apollo-boost';


export const APP_QUERY = gql`
   query App {
    user{
        username
        email
    }
    cart{
        products{
        id
        product{
            name
            discountPrice
            discountPriceCurrency
        }
        number
        }
    }
    addCartVisible @client
    addCartProductID @client
    }
    `