import mongoose from "mongoose";

export const connect = async () => {
  try {
    const mongoDbConfig = {
      uri: process.env.MONGODB_CONNECTION_STRING || "",
      options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMs: 30000,
        keepAlive: true,
        retryWrites: false,
      },
    };

    const { uri, options } = mongoDbConfig;

    await mongoose.connect(uri, options);
    console.log(`🍃 Connected to MongoDB database`);
  } catch (error) {
    console.error(`Error trying to connect to MongoDB ==> ${error}`);
  }
};
