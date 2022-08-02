import {MongoClient} from 'mongodb' 

async function handler(req, res){
    //only post request
    if(req.method === "POST"){
        const data = req.body

        // const {title, image, address, description} = data

      const client = await MongoClient.connect('mongodb+srv://Iana:mongodb@cluster0.siwvf.mongodb.net/meetups?retryWrites=true&w=majority')
      const db = client.db()

      const meetupsCollections = db.collection('meetups')

      const result = await meetupsCollections.insertOne(data)

      console.log(result)
      client.close()

      res.status(201).json({message: 'meetup inserted'})
    }
}

export default handler;