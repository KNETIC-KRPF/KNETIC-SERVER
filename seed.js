const db = require('monk')('localhost:27017/patchdb');
const patch = require('./patch');
const account = require('./account-samples.js')
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
