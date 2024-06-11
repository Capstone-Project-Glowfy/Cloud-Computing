const tf = require('@tensorflow/tfjs-node');

const loadSkinModel = async () => {
    try {
        const url = process.env.SKIN_TYPE_MODEL_URL;
        if (!url) {
            throw new Error("SKIN_TYPE_MODEL_URL is not defined");
        }
        console.log(`Loading skin model from: ${url}`);
        return await tf.loadLayersModel(url);
    } catch (error) {
        console.error(`Error loading skin model: ${error.message}`);
        throw error;
    }
}

const loadDiseaseModel = async () => {
    try {
        const url = process.env.SKIN_PROBLEM_MODEL_URL;
        if (!url) {
            throw new Error("SKIN_PROBLEM_MODEL_URL is not defined");
        }
        console.log(`Loading disease model from: ${url}`);
        return await tf.loadLayersModel(url);
    } catch (error) {
        console.error(`Error loading disease model: ${error.message}`);
        throw error;
    }
}

module.exports = { loadSkinModel, loadDiseaseModel };