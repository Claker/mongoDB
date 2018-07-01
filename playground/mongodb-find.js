const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').find({_id:new ObjectID('5b30c61d225b3430ac51466f')})
    //                         .toArray().then((docs)=>
    // {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined,2));    
    // },(err)=>{
    //     console.log('Unable to fetch data',err);
    // });


    // db.collection('Todos').find({completed:false}).count().then((counter)=>
    // {
    //     console.log(counter);
    // },(err)=>{

    // });


    db.collection('Users').find({name:'Claker'}).toArray().then(
        (result)=>{
            console.log(JSON.stringify(result,undefined,2));
        },
         
        (err)=>{
            console.log('Sorry, error getting data',err);
        }
    );










    db.close();
});