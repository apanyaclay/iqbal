const { Firestore } = require('@google-cloud/firestore');
const path = require('path') 

const db = new Firestore({
  keyFilename: path.resolve('./service-account.json'),
  projectId: 'submissionmlgc-iqbalsyahbandi'
});

async function storeData(id, data) {
 
  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}
 
module.exports = storeData;