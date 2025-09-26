import express from "express";
const messageRouter = express.Router();

messageRouter.get("/", (req, res) => {
  res.send("Message routeit is working shoryly ");
});

export default messageRouter;
