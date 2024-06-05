const tf = require('@tensorflow/tfjs-node');
 
const loadSkinModel = async () => {
    return tf.loadGraphModel(process.env.SKIN_TYPE_MODEL_URL);
}

const loadDiseaseModel = async () => {
    return tf.loadGraphModel(process.env.DISEASE_MODEL_URL);
}
 
module.exports = {loadSkinModel, loadDiseaseModel};