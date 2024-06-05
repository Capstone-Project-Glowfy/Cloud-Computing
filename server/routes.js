const {scanPredictHandler} = require('./handler.js');
 
const routes = [
  {
    path: '/register',
    method: 'POSt',
    handler: test,
    options: {
      payload: {
        
      }
    },
  },
  {
    path: '/login',
    method: 'POST',
    handler: test,
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
    handler: test,
    options: {
      
    },
  },
  {
    path: '/products',
    method: 'GET',
    handler: test,
    options: {
      
    },
  },
  {
    path: '/articles',
    method: 'GET',
    handler: test,
    options: {
      
    },
  },
  
]
 
module.exports = routes;