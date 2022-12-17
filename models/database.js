// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;

// let _db;

// const MongoConnect= callback =>{
//   MongoClient.connect()
//     .then(client=>{
//       _db=client.db('shop')
//       console.log('Done')
//       callback()
//     }
//   ).catch(err=>{
//     console.log(err,'asa')
//     throw err
//   })
// }

// const getDb=()=>{
//   if(_db){
//     return _db;
//   }
//   throw ('No DB found')
// }

// exports.MongoConnect= MongoConnect;
// exports.getDb=getDb;
