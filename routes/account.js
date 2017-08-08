const mongo = require('mongodb');
const express = require('express');
const router = express.Router();
const monk = require('monk');
const db =  monk(DATABASE_URL);
const accounts = db.get('accounts');


router.get('/',(req,res) => {
	const data = accounts.find({});
	return data.then((data) => {
		res.json(data);
	});
});

router.post('/', (req, res, next) => {
	accounts.insert(req.body)
	.then(response => {
		res.json(response);
	});
});

router.put('/:id', (req, res) => {
	accounts.findOneAndUpdate({_id:req.params.id}, req.body)
	.then(response => {
		res.json(response);
	});
});

router.delete('/:id', (req, res) => {
	accounts.findOneAndDelete({_id:req.params.id})
		.then(response => {
			res.json(response);
		});
});



module.exports = router;
