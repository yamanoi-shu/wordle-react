const express = require('express');
const router = express.Router();

router.get("/get", (req, res) => {
  var uuid = req.body.uuid
  //TODO: データストアからデータ取得
  var info = {};

  res.json(info);
})

router.post("/answer", (req, res) => {
  var answer = req.body.answer;
  var isComplete = req.body.is_complete;

  //TODO: データストアへ回答を保時
  if (isComplete === 1) {
    //TODO: 正解した際の処理
  }
})


