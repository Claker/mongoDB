const {MongoClient,ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

// destructuring
// let user = {name:'SaVedem',age:11,}
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     text:'Smth to do',
    //     completed:false,
    // },(err,res)=>{
    //     if(err){
    //         return consoler.log('error while inserting ocurred');
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     // _id:'1',
    //     name:'Name',
    //     age:12,
    // },(err,res)=>{
    //     if(err){
    //         return consoler.log('error while inserting ocurred');
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));

    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.close();
});