const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongo = require('mongodb');
const monk = require('monk');
const db =  monk('localhost:27017/patchdb');
const accounts = db.get('accounts');
const jwt = require('jsonwebtoken');

require('dotenv').config();



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
                const account = req.body;
                bcrypt.hash(req.body.password, 8)
                .then((hash) =>{
                    account.password = hash;
                    accounts.insert(account)
                    .then(account =>{
                        jwt.sign({
                            id: account._id,
                        }, process.env.TOKEN_SECRET, {
                            expiresIn: '7d'
                        }, (err, token) =>{
                            console.log('err', err);
                            console.log('token', token);
                            res.json({
                                id: account._id,
                                email: account.email,
                                token: token,
                                message: 'New Account Created'
                            })
                        })
                    });

                });
            }
        });
    } else {
        next(new Error ('Invalid User Info!'));
    }
});

router.post('/login', (req, res, next) =>{
	if(validUser(req.body)){
		console.log(req.body.email);
		accounts.findOne( { email: req.body.email } )
		.then((account) =>{
			console.log(account);
			if(account) {
				bcrypt.compare(req.body.password, account.password)
				.then((result) =>{
					if(result){
						res.json({
							account,
							message: 'You Are Successfully Logged In!'
						});
					} else {
						next(new Error ('Incorrect Password!'));
					}
				});
			} else {
				next(new Error('Email Does Not Exist, Please Sign Up With A New Account'));
			}
		});
	} else {
		next(new Error('The Information You Entered Is Not Valid'));
	}
});

module.exports = router;
