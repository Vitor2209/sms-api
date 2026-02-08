require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

sequelize.sync().then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log("Server running");
  });
});
