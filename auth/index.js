const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongo = require('mongodb');
const monk = require('monk');
const db =  monk('localhost:27017/patchdb');
const accounts = db.get('accounts');


function validUser(account){
	const validEmail = typeof account.email == 'string' && account.email.trim() != '';
	const validPassword = typeof account.password == 'string' && account.password.trim() != '';
	return validEmail && validPassword;
}

router.post('/signup', (req, res, next) =>{
	if(validUser(req.body)){
		accounts.findOne( { email: req.body.email } )
		.then((account) =>{
			if(account) {
				next(new Error('Email Already In Use!'));
			} else {
				const account = {
					email: req.body
				};
				bcrypt.hash(req.body.password, 8)
				.then((hash) =>{
					account.password = hash;
					accounts.insert(account)
					.then(account =>{
						res.json(account);
					});

				});
			}
		});
	} else {
		next(new Error ('Invalid User Info!'));
	}
});





module.exports = router;
