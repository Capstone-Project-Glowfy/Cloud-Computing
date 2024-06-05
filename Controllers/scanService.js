const tf = require('@tensorflow/tfjs-node');

const postScanSkinInformation = async (model, image) => {
     try {
          const tensor = tf.node
               .decodeJpeg(image)
               .resizeNearestNeighbor([224, 224])
               .expandDims()
               .toFloat()

          const prediction = await model.predict(tensor);

          const SkinClass = ['dry', 'oily', 'normal'];
          const classResult = tf.argMax(prediction, 1).dataSync()[0];
          const skinCondition = SkinClass[classResult];

          return skinCondition;

     } catch {

     }
}

const postScanDiseaseJerawat = async (model, image) => {
     try {
          const tensor = tf.node
               .decodeJpeg(image)
               .resizeNearestNeighbor([224, 224])
               .expandDims()
               .toFloat()

          const prediction = await model.predict(tensor).data();
          const probability = prediction[0]
          const threshold = 0.5;

          if (probability > threshold){
               return true;
          } else {
               return false;
          }
     } catch {

     }
}


const getMessageStatus = async (model, image) => {
     try {
          let message

          if (await postScanSkinInformation(model, image) && await postScanDiseaseJerawat(model, image) == true) {
               message = "scan success"
          } else {
               message = "scan failed"
          }

         return message;    
     } catch {

     }
}

module.export = { 
     postScanSkinInformation,
     postScanDiseaseJerawat,
     getMessageStatus,
}