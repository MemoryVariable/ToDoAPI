//const MongoClient =require("mongodb").MongoClient;
const {MongoClient,ObjectId} =require("mongodb");

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log("unable to connect MongoDB");
    }
    console.log("connected to Mongo DB server");
    const db =client.db('ToDoApp');
    // db.collection('ToDos').insertOne({
    //     text:'Something to do 1',
    //     completed:false
    // },(err,result)=>{
    //     if (err){
    //         return console.log("Unable to inser to do ",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('Users').insertOne({

        _id:234,
        name:'Kukk    sh',
        age:29,
        location:'Pune'
    },(err,result)=>{
        if (err){
            return console.log("unable to insert in Users",err);
        }
        console.log(JSON.stringify(result,undefined,2));
    });

    db.collection('Users').find().toArray().then((result)=>{
            console.log(JSON.stringify(result,undefined,2));
    });
    client.close();
 });
