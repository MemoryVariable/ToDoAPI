//const MongoClient =require("mongodb").MongoClient;
const {MongoClient,ObjectId} =require("mongodb");

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log("unable to connect MongoDB");
    }
    console.log("connected to Mongo DB server");
    const db =client.db('ToDoApp');
    
    db.collection('Users').find({_id:234}).count().then((docs)=>{
            console.log("the Users :")
            console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        if(err){
            console.log('Unable to fetch the documents',err);
        }
    });
   // client.close();
 });
