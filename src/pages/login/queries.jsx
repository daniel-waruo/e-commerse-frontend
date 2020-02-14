import {gql} from 'apollo-boost';


export const 
login = gql`
  mutation Login($email:String , $password:String ){
    login(email :$email , password:$password) @client {
      message
      field
    }
  }
`,
loginErrors=gql`
  query LoginErrors{
    loginErrors @client{
      field
      message
    }
    user {
      email
      username
    }
  }
`;
