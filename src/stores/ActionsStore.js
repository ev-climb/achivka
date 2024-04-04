import { defineStore } from "pinia";
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

export const useActionsStore = defineStore('actionsStore', {
  state: () => ({
    actions: [
    ],
  }),
  getters: {
    completedActions() {
      return this.actions.filter(action => action.done)
    }
  },
  actions: {
    getActions() {
      const db = useFirestore();
      try {
        this.actions = useCollection(collection(db, 'actions'));
        console.log('Getting actions: success');
      } catch (error) {
        console.error('Getting actions: ', error);
      }
    },
    async updateActions() {
      const db = useFirestore();
      try {
        this.actions.map(action => {
          const actionRef = doc(db, 'actions', action.id);
          setDoc(actionRef, { done: false }, { merge: true });
          console.log('Updating actions: success');
        })
      } catch (error) {
        console.error('Updating actions: ', error);
      }
    },
    async toCompleted(action) {
      const db = useFirestore();
      const actionRef = doc(db, 'actions', action.id)
      await setDoc(actionRef, { done: true }, { merge: true });
    },
    async addAction(action) {
      const db = useFirestore();
      try {
        await addDoc(collection(db, "actions"), action);
        console.log('Adding activity: success');
      } catch (error) {
        console.error("Adding activity: ", error);
      }
    },
    async deleteAction(id) {
      const db = useFirestore();
      try {
        await deleteDoc(doc(db, "actions", id));
        console.log('Deleting activity: success');
      } catch (error) {
        console.error("Deleting activity: ", error);
      }
    }
  }
})
