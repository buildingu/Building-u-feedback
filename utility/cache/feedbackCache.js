const db = require("../../Models/index");
const RedisClient = db.RedisClient;

const feedbackCache = {
  async get(key) {
    if (!RedisClient) return null;

    try {
      const cachedFeedBack = await RedisClient.get(`feedback:${key}`);
      return JSON.parse(cachedFeedBack);
    } catch (err) {
      logger.error(`Error getting key ${key} from Redis: ${err}`);
    }

    return null;
  },

  async set(key, object, ttl=300) {
    if (!RedisClient) return;

    try {
      await RedisClient.setEx(`feedback:${key}`, ttl, JSON.stringify(object));
    } catch (err){
      logger.error(`Error setting key ${key} to Redis: ${err}`)
    }
  }
};

module.exports = feedbackCache;