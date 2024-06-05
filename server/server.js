// require('dotenv').config();
 
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const {loadSkinModel, loadDiseaseModel} = require('../Controllers/loadModel');

(async () => {
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
        },
    });
 
    const skinModel = await loadSkinModel();
    const diseaseModel = await loadDiseaseModel();
    
    server.app.model = skinModel;
    server.app.model = diseaseModel;
 
    server.route(routes);
 
    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
})();