// import db interface package
const mysql = require('mysql2');
// create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cowsdb'
})

connection.connect(function(err) {
  if (err) {
    console.log('error connecting')
    return;
  }
  console.log('connected to cowsdb!')
});
// CRUD

// create a querry get all cow data
getAllCows = function(callback){
    connection.query('SELECT * FROM cows', (err, data) =>{
      if (err) {
        callback(err,null);
      } else {
        callback(null,data);
      }
    });
}

// make a cow
makeACow = function(NewCowObj, callback) {
  let query = `INSERT INTO cows (name, description) VALUES ('${NewCowObj.name}', '${NewCowObj.description}')`;
  connection.query(query, (err, data) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

//update a cow
updateCow = function(updateCowObj, callback) {
  console.log('here!')
  let query = `UPDATE cows SET ${updateCowObj.propName} = '${updateCowObj.oldVal}' WHERE ${updateCowObj.propName} = '${updateCowObj.newVal}'`
  connection.query(query,(err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}

// create a querry to read cow data (get)


//create a querry to querry to updated cow data (updated)


//creaete a querry to delete cow data

// export to server
module.exports.getAllCows = getAllCows;
module.exports.makeACow = makeACow;
module.exports.updateCow = updateCow;

// getAllCows = function(){
//   console.log('inside get all cows Function')
//   return new Promise((resolve, reject) =>{
//     connection.query('SELECT * FROM cows', (err, data) =>{
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     });
//   });
//}