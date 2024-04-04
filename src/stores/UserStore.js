import { defineStore } from "pinia";
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    scoreCounter: 0,
    levels: [],
  }),
  getters: {
   
  },
  actions: {
    getScoreCounter() {
      const db = useFirestore();
      try {
        this.scoreCounter = useCollection(collection(db, "scoreCounter"));
        if (this.scoreCounter < 0) this.scoreCounter = 0;
        console.log('Getting scoreCounter: success');
      } catch (error) {
        console.error('Getting scoreCounter: ', error);
      }
    },
    getLevels() {
      const db = useFirestore();
      try {
        this.levels = useCollection(collection(db, "levels"));
        console.log('Getting levels: success');
      } catch (error) {
        console.error('Getting levels: ', error);
      }
    },
    async addScores(scores) {
      const db = useFirestore();
      this.scoreCounter = useCollection(collection(db, "scoreCounter"));
      const scoreCounterRef = doc(db, "scoreCounter", this.scoreCounter[0].id);
      try {
        await setDoc(scoreCounterRef, { scoreCounter: Number(scores) }, { merge: true });
      } catch (error) {
        console.error("Updating scoreCounter: ", error);
      }
    }
  }
})
