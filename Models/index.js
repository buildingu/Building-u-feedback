require('dotenv').config();
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

// Redis client
const {createClient} = require("redis");
const RedisClient = createClient({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379
});

(async () => {
  try {
    await RedisClient.connect();
    console.log("Redis connected")
  } catch (err) {
    console.error('Unable to connect to Redis:', err);
  }
})();

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
  RedisClient,
};
