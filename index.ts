import admin, { type ServiceAccount } from "firebase-admin"
import serviceAccount from "./service-account.json"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

const db = admin.firestore()


const docSnapshot = await db.collection("entries").doc("test").get()
const docData = docSnapshot.data()

console.log("Document ID:", docSnapshot.id)
console.log("Document Data:", docData)