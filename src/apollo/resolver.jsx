import { request } from '../_request';
import { LOGIN_URL , LOGOUT_URL , REGISTER_URL } from '../_constants';
import { parseError } from '../_helpers';

export default {
    Mutation: {
      addProductDialog: (obj, args, {cache}, info) => {
        cache.writeData({
          data: {
            addCartVisible: true,
            addCartProductID: args.productID
          }
        });
        return null;
      },
      removeProductDialog: (obj, args, {cache}, info) => {
        cache.writeData({
          data: {
            addCartVisible: false,
            addCartProductID: null
          }
        });
        return null;
      },
      login: async (obj, args, {cache}, info) => {
        // send a login request to the server
        await request.post({
          url : LOGIN_URL,
          data : args,
          success : data => {
            localStorage.setItem("token",data.token);
            window.location.reload();
          },
          error : error => {
            cache.writeData({ 
              data: { 
                loginErrors: parseError(error)
              } 
            })
          } 
        })
        // return null
        return null;
      },
      logout : async (obj, args, {cache}, info) => {
        // send a logout request to the server
        await request.post({
          url : LOGOUT_URL,
          success : data => {
            localStorage.clear();
            window.location.reload();
          }, 
        })
        // return null
        return null;
      },
      register : async (obj, args, {cache}, info) => {
        let success = false ; 
        // send a login request to the server
        await request.post({
          url : REGISTER_URL,
          data : args,
          success : data => {
            localStorage.setItem("token",data.token);
            success = true ;
            //window.location.reload();
          },
          error : error => {
            cache.writeData({ 
              data: { 
                registerErrors: parseError(error)
              } 
            })
            console.log(parseError(error));
          } 
        })
        // return null
        return success;
      }, 
    }
  };