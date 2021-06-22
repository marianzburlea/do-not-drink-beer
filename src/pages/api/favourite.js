import * as admin from 'firebase-admin'

const account = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.NEXT_PRIVATE_FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.NEXT_PRIVATE_FIREBASE_PRIVATE_KEY,
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(account),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

const firestore = admin.firestore()

const handler = async (request, response) => {
  const {
    body: { userId, beerId },
    query,
    method,
  } = request

  if (method === 'GET') {
    const { userId } = query

    const testRef = firestore.collection('test')
    const testSnap = await testRef.get(userId)
    // const list = testSnap.data()
    testSnap.docs.map((doc) => {
      const { list } = doc.data()

      response.status(200).json({
        message: 'The world is a beautiful place to be!',
        list,
      })
    })
  }

  if (method === 'POST') {
    const testRef = firestore.collection('test')
    // get list
    const getSnap = await testRef.doc(userId).get()
    const data = getSnap.data().list || []
    const newData = data.includes(beerId)
      ? data.filter((id) => id !== beerId)
      : [...data, beerId]

    testRef.doc(userId).set({ list: newData })
    response.status(200).json({
      message: 'I am on it boss!',
    })
  }
}

export default handler
