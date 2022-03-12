const express = require('express');
const router = express.Router();
const Firestore = require('../firestore')

const firestore = new Firestore()

router.get("/get", (req, res) => {
  var uuid = req.body.uuid
  //TODO: データストアからデータ取得
  var ansList = firestore.getAnsList(uuid);

  res.json(ansList);
})

router.post("/answer", (req, res) => {
  var answer = req.body.answer;
  var isComplete = req.body.is_complete;

  //req = {
  //
  //}

  //TODO: データストアへ回答を保時
  if (isComplete === 1) {
    //TODO: 正解した際の処理
  }
})


