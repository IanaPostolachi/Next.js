import {MonogoClient} from 'mongodb'

async function handler(){
    const client = await MongoClient.connect('mongodb+srv://Iana:mongodb@cluster0.siwvf.mongodb.net/meetups?retryWrites=true&w=majority')
      const db = client.db()

      const meetupsCollections = db.collection('meetups')

      const meetups = await meetupsCollections.find().toArray()
      console.log(result)
      client.close()

      res.status(200).json(meetups)

}

export default handler;