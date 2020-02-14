import gql from 'graphql-tag';

export default gql`
    type Error{
        message : String 
        field : String
    }
    extend type Query {
        addCartVisible : Boolean
        addCartProductID : String
        userLoggedIn : User
        loginErrors : [Error]
        registerErrors : [Error]
    }
    extend type Mutation {
        addProductDialog(productID:String! ) : Boolean
        removeProductDialog : Boolean
        login(email:String! ,password:String) : Boolean
        register(
            email:String! ,
            username:String!,
            password1: String!,
            password2:String!
            ) : Boolean
        
        logout : Boolean
    }
    extend type User {
        isAuthenticated : Boolean
    }
`;
