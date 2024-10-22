import express from "express";
const router = express.Router();

//register endpoint
router.post('/register', async (req, res) => {
  res.send("Register")
});

//login endpoint
router.post('/login', async (req, res) => {
  res.send("login")
});

// module.exports = router;
export default router