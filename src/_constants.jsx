export const API_URL = 'http://127.0.0.1:8000';

export const GRAPHQL_ENDPOINT = `${API_URL}/graph-ql`;

export const LOGIN_URL = `${API_URL}/accounts/auth/login/`;
 
export const LOGOUT_URL = `${API_URL}/accounts/auth/logout/`;

export const REGISTER_URL = `${API_URL}/accounts/auth/registration/`;

export const postConfig = data => ({    
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
})