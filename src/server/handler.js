const crypto = require('crypto');
const storeData = require('../services/storeData');
const { getMessageStatus, postScanSkinInformation, postScanSkinDisease } = require('../services/scanService');


async function scanPredictHandler(request, h) {
     const { image } = request;
     const { model } = request;
    
     const id = crypto.randomUUID();
     const message = await getMessageStatus();
     const skinCondition = await postScanSkinInformation(model, image);
     const disease = await postScanSkinDisease(model, image);
     const createdAt = new Date().toISOString();
    
     const data = {
          "id-scan":id,
          "message-scan": message,
          "prediction" : {
               "status-kulit": skinCondition, 
               "status-penyakit": disease, 
          },
          "Scan-Date":createdAt,
     }

     await storeData(id, data);
     
     return h.response({
          scanStatus: "Scan succesfully!!",
          data: data,
     }).code(201)

}

module.exports = {scanPredictHandler}