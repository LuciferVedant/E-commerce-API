import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "on_model",
  },
  on_model: {
    type: String,
    enum: ["Product", "Category"],
  },
})
  .pre("save", (next) => {
    console.log("New like coming in");
    next();
  })
  .post("save", (doc) => {
    // so whenever the save operation begins someone likes we will have these middleware's executed first pre then post i.e first before saving the post then after saving the post to print these 2 different logs
    console.log("Like is saved");
    console.log(doc);
  })
  .pre("find", (next) => {
    console.log("Retriving likes");
    next();
  })
  .post("find", (docs) => {
    console.log("Post find");
    console.log(docs);
  });
