const express = require("express");
const deck = require("./deck");

const router = express.Router();

router.use("/deck", deck);

module.exports = router;
