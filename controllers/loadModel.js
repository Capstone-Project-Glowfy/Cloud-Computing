const tf = require('@tensorflow/tfjs-node');
 
const loadSkinModel = async () => {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2645144335.
    return tf.loadLayersModel(process.env.SKIN_TYPE_MODEL_URL);
}

const loadDiseaseModel = async () => {
    return tf.loadLayersModel(process.env.SKIN_PROBLEM_MODEL_URL);
}
 
module.exports = {loadSkinModel, loadDiseaseModel};
