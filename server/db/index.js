// inmport sequalize
const Sequelize = require('sequelize');

// connect to the database
const sequelize = new Sequelize('cowsdb', 'root', '', {
  dialect: 'mysql'
});

// model a table
const Cows = sequelize.define('cowsSqlze', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// sychronize the model
Cows.sync({force:true}).then(() => {
  return Cows.create({
    name: 'Betty',
    lastName: 'The first Cow Ever!!'
  });
});

// get all cows
findAllCows = () => {
  return Cows.findAll();
}

// create a cow
createACow = (newCowObj) => {
  return Cows.create({
    name: newCowObj.name,
    description: newCowObj.description
  })
}


// export tablefefe
exports.Cows = Cows;
exports.findAllCows = findAllCows;
exports.createACow = createACow;
