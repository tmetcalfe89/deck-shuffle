const express = require("express");
const {
  sendAsJson,
  initializeRequestInfo,
} = require("../../controllers/v1/common");
const { shuffleDeck, buildDeck } = require("../../controllers/v1/deck");

const router = express.Router();

router.get("/", initializeRequestInfo, buildDeck, shuffleDeck, sendAsJson);

module.exports = router;
