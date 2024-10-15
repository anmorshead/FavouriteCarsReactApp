// var express = require('express');
import express from "express";
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/abc', function(req, res){
  res.send('ABC')
})

// module.exports = router;
export default router