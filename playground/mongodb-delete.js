const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').deleteMany({name:'todo'}).then((res)=>{
    //     console.log('done');
    // },(err)=>{
    //     console.log('di masa');
    // });

    // db.collection('Todos').deleteOne({a:'a'}).then((res)=>{
    //     console.log(res);
    // },(err)=>{
    //     console.log('di masa');
    // });
    
    db.collection('Todos').findOneAndDelete({a:'b'}).then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    },(err)=>{
        console.log('di masa');
    });
    

    db.close();
});