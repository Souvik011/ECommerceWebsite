import {createContext} from 'react';

const AuthContext = createContext({
  Tokenid:'',
  isLoggedIn:false,
  login:(token)=>{},
  logout:()=>{}
});

export default AuthContext;