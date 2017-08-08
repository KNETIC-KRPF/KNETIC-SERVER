const ROOT_URL = (window.location.hostname === "localhost") ? `http://localhost:3000` : DATABASE_URL;

const mongo = require('mongodb');
const express = require('express');
const router = express.Router();
const monk = require('monk');
const db =  monk(ROOT_URL);
const patches = db.get('patches');


router.get('/',(req,res) => {
	const data = patches.find({});
	return data.then((data) => {
		res.json(data);
	});
});

router.post('/', (req, res, next) => {
	patches.insert(req.body)
	.then(response => {
		res.json(response);
	});
});

router.put('/:id', (req, res) => {
	patches.findOneAndUpdate({_id:req.params.id}, req.body)
	.then(response => {
		res.json(response);
	});
});

router.delete('/', (req, res) => {
	patches.findOneAndDelete(req.body)
	.then(response => {
		res.json(response);
	});
});



module.exports = router;
