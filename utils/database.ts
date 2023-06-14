import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clustername.pvuuibs.mongodb.net/?retryWrites=true&w=majority`;
  // like to deprecated todo: check!
  // const mongo_opt: ConnectOptions = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };

  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongo_url)
    .then(() => {
      isConnected = true;
      console.log("MongoDB connected!");
    })
    .catch((err) => console.log(`MongoDB connection error: ${err}`));
};
