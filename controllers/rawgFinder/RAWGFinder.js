const express = require("express");
const router = express.Router();

const FinderService = require("../../services/finderService/FinderService");

router.post("/", (req, res) => {
  console.log(req.body);
  FinderService.findAll(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
