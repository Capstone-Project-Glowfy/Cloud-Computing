const {scanPredictHandler, getProducts, getArticles, getSkins, loginUser, registerUser} = require('./handler.js');
 
const routes = [
  {
    path: '/register',
    method: 'POSt',
    handler: loginUser,
    options: {
      payload: {
        
      }
    },
  },
  {
    path: '/login',
    method: 'POST',
    handler: registerUser,
    options: {
      payload: {

      }
    },
  },
  {
    path: '/predict',
    method: 'POST',
    handler: scanPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true
      },
    },
  },
  {
    path: '/skins',
    method: 'GET',
    handler: getSkins,
    options: {
      
    },
  },
  {
    path: '/products',
    method: 'GET',
    handler: getProducts,
    options: {
      
    },
  },
  {
    path: '/articles',
    method: 'GET',
    handler: getArticles,
    options: {
      
    },
  },
  
]
 
module.exports = routes;