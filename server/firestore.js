import { firestore } from 'firebase-admin';

export default class Firestore {
  constructor() {
    admin.initializeApp();
    this.db = admin.firestore();
  }

  async getAnsList(uuid) {
    const doc = db.collection("answers").doc(uuid);
    const answersList = await doc.get();
    return answersList;
  }

}

