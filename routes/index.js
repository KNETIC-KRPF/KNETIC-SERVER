const express = require('express');
const mongo = require('mongodb');
const router = express.Router();
const db = require('monk')('localhost:27017/patchdb');
const patches = db.get('patches');

router.get('/', function(req, res){
	const patch = patches.find({});
	return patch.then((patch) => {
		res.json(patch);
	});
});



module.exports = router;
