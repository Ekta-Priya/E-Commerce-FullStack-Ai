
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase();

  let reply = "Sorry, I didn't understand that.";

  if (lowerMsg.includes("fashion")) {
    reply = "You can explore the latest fashion in our 'Collections' section.";
  } else if (lowerMsg.includes("offer") || lowerMsg.includes("discount")) {
    reply = "We have 20% off on selected items! Check the homepage banner.";
  } else if (lowerMsg.includes("return")) {
    reply = "You can return products within 7 days. Visit our Return Policy page.";
  } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
    reply = "Hello! How can I assist you today?";
  }

  res.json({ reply });
});

export default router;
