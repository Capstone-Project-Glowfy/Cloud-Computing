const { nanoid } = require('nanoid');

async function scanPredictHandler(request, h) {
     const { image } = request;
     const { model } = request;
    
     const id =  nanoid(16);
     const { message, errorStatus} = await getMessageStatus();
     const skinCondition = await postScanSkinInformation(model, image);
     const disease = await postScanSkinDisease(model, image);
     const createdAt = new Date().toISOString();
    
     const data = {
          "id-scan":id,
          "error-status": errorStatus, //from error handling?
          "message-scan": message,
          "prediction" : {
               "status-kulit": skinCondition, 
               "status-penyakit": disease, 
          },
          "Scan-Date":createdAt,
     }

     // logic to push data
     
     return h.response({
          scanStatus: "Scan succesfully!!",
          data: data,
     }).code(201)

}

module.exports = {scanPredictHandler}