const {scanPredictHandler} = require('./handler.js');
 
const routes = [
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
]
 
module.exports = routes;