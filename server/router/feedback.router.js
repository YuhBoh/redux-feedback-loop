const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// POST
router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.feelings)
  const feeling = req.body.feelings;
  const understanding = req.body.understanding;
  const support = req.body.support;
  const comments = req.body.comments;

  const sqlText = `
  INSERT INTO "feedback"
  ("feeling", "understanding", "support", "comments")
  VALUES 
  ($1, $2, $3, $4)`;

  const sqlValues = [feeling, understanding, support, comments];

  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

module.exports = router;
