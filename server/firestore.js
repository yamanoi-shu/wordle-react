const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require();

export default class Firestore {
  constructor() {
    initializeApp();
    this.db = getFirestore();
  }

  async getAnsList(uuid) {
    const doc = db.collection("answers").doc(uuid);
    const answersList = await doc.get();
    return answersList;
  }

  async
}

