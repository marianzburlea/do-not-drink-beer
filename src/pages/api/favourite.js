import * as admin from 'firebase-admin'
import NextCors from 'nextjs-cors'

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

  await NextCors(request, response, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (method === 'GET') {
    const { userId } = query

    const testRef = firestore.collection('test')
    const testSnap = await testRef.doc(userId).get()
    // const list = testSnap.data()
    if (testSnap.exists) {
      const { list } = testSnap.data()

      response.status(200).json({
        message: 'The world is a beautiful place to be!',
        list,
      })
    } else {
      response.status(200).json({
        message: 'The world is a beautiful place to be!',
        list: [],
      })
    }
  }

  if (method === 'POST') {
    try {
      // get list
      const testRef = firestore.collection('test')
      const getSnap = await testRef.doc(userId).get()

      if (getSnap.exists) {
        const data = getSnap.data().list
        const newData = data.includes(beerId)
          ? data.filter((id) => id !== beerId)
          : [...data, beerId]

        testRef.doc(userId).set({ list: newData })

        response.status(200).json({
          message: 'My favourite job!',
        })
      } else {
        testRef.doc(userId).set({ list: [beerId] })

        response.status(200).json({
          message: 'Your first favourite',
        })
      }
    } catch (error) {
      response.status(400).json({
        message: 'error',
        error,
      })
    }
  }
}

export default handler
