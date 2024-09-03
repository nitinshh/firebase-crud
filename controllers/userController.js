const { addDoc, getDocs, doc, updateDoc, deleteDoc } = require('firebase/firestore');
const User = require('../config');

module.exports = {
    get: async (req, res) => {
        try {
            const snapshot = await getDocs(User);
            const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            res.send(list);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error retrieving users' });
        }
    },

    add: async (req, res) => {
        try {
            const data = req.body;
            await addDoc(User, data);  // Use addDoc to add a new document to the collection
            res.send({ message: 'User added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error adding user' });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.body.id;
            delete req.body.id;
            const data = req.body;
            const userDoc = doc(User, id);  // Reference to the specific document
            await updateDoc(userDoc, data);
            res.send({ message: 'User updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error updating user' });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.body.id;
            const userDoc = doc(User, id);  // Reference to the specific document
            await deleteDoc(userDoc);
            res.send({ message: 'Deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error deleting user' });
        }
    }
};
