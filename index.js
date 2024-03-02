import admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.cert("./service-account.json"),
})

const db = admin.firestore()


const docSnapshot = await db.collection("entries").doc("test").get()
const docData = docSnapshot.data()

console.log("Document ID:", docSnapshot.id)
console.log("Document Data:", docData)