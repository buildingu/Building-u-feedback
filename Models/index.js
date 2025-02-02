const dbConfig = require("../config/db.config")["development"];
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: "mysql",
  port: dbConfig.port,
});

const User = require("./User")(sequelize, DataTypes);
const FeedbackRequest = require("./Feedbackrequest")(sequelize, DataTypes);
const Feedbacks = require("./Feedbacks")(sequelize, DataTypes);
const Otptoken = require("./Otptoken")(sequelize, DataTypes);
const ExerciseInfo = require("./ExerciseInfo")(sequelize, DataTypes);


//This was poorly desgined. Should spent more time fixing this
User.hasMany(FeedbackRequest, { foreignKey: "userId" });
FeedbackRequest.belongsTo(User, { foreignKey: "userId" });

FeedbackRequest.belongsTo(User, { as: "mentor", foreignKey: "mentorId" });
User.hasMany(FeedbackRequest, {
  as: "mentoredRequests",
  foreignKey: "mentorId",
});

FeedbackRequest.hasMany(Feedbacks, { foreignKey: "feedbackRequestId" });
Feedbacks.belongsTo(FeedbackRequest, { foreignKey: "feedbackRequestId" });
User.hasMany(Feedbacks, { foreignKey: 'userId' }); 
ExerciseInfo.belongsTo(User, { foreignKey: "userId" });
User.hasMany(ExerciseInfo, { foreignKey: "userId" });

async function syncDatabase() {
  try {
    await sequelize.sync({});
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

async function ensureDatabaseExists() {
  try {
    const dbName = process.env.DB_NAME;

    const [results] = await sequelize.query(`SHOW DATABASES LIKE '${dbName}'`);
    
    if (results.length === 0) {
      // Database doesn't exist, so create it
      await sequelize.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database '${dbName}' created successfully.`);
    } else {
      console.log(`Database '${dbName}' already exists.`);
    }
  } catch (error) {
    console.error('Error ensuring database existence:', error);
  } finally {
    await sequelize.close();
  }
}




(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    syncDatabase();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Export models
module.exports = {
  sequelize,
  User,
  FeedbackRequest,
  Feedbacks,
  Otptoken,
  ExerciseInfo,
};
