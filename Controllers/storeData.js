const { Firestore } = require('@google-cloud/firestore');
 
const storeData = async (id, data) => {
  const database = new Firestore();
 
  const predictCollection = database.collection('predictions');
  const userCollesction = predictCollection.collection('nama_user');
  return userCollesction.doc(id).set(data);
}
 
module.exports = storeData;