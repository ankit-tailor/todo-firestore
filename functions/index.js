const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.initializeApp().firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.addTodo = functions.https.onCall(async (data, context) => {
  const todoRef = db.collection(`users/${context.auth.uid}/todos`);
  const todoSnapShot = await todoRef.get();
  const todos = todoSnapShot.doc.map((snapshot) => {
    return snapshot.data();
  });
  const exists = todos.some((todo) => todo.title === data.title);
  if (!exists) {
    await todoRef.add(data);
  }
});
