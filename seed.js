const dotenv = require('dotenv').config();

const db = require('monk')(process.env.DATABASE_URL);
const patch = require('./patch');
const account = require('./account-samples.js');
const patches = db.get('patches');
const accounts = db.get('accounts');

patches.remove();
accounts.remove();

accounts.insert(account).then((result) => {
	console.log(result);
	db.close();
});

patches.insert(patch).then((result) => {
	console.log(result);
	db.close();
});
