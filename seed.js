const db = require('monk')('mongodb://admin:Mongods@ds113063.mlab.com:13063/knetic');
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
