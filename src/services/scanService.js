const tf = require('@tensorflow/tfjs-node');

async function postScanSkinInformation (model, image) {
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

async function postScanDiseaseJerawat (model, image) {
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

          } else {
               return 0;
          }

          /*
          jika model ML true or false
          nanti cari logic yang 
          mengembalikan nilai true or false 
          atau mengembalikan nama penyakit atau 0
          */
     } catch {

     }
}


async function getMessageStatus() {
     try {
          let allSuccess
          /*
          nanti ada kondisi setiap untuk memeriksa
          function postScanSkinDisease dan postScanSkinInformation
          dan memastikan dua function itu berjalan lancar, 
          baru masuk ke perkondisian
          */

          let errorStatus
          let message

          if (allSuccess) {
               errorStatus = false;
               message = "scan success"
          } else {
               errorStatus = true;
               message = "scan failed"
          }

         return { message, errorStatus};    
     } catch {

     }
}

module.export = { 
     postScanSkinInformation,
     postScanDiseaseJerawat,
     getMessageStatus,
}