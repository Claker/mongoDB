const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5b372b1a2d57fd41fc73b10d")},{
        $set:{name:'Clau'},
        $inc:{age:-10}},{returnOriginal:false}).then(
        (res)=>{
                console.log(res);
        },

        (err)=>{}
    );

    db.close();
});