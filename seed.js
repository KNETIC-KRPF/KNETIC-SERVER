const db = require('monk')('localhost:27017/patchdb');
const patch = require('./patch');
const patches = db.get('patches');

patches.remove();

patches.insert(patch).then((result) => {
    console.log(result);
    db.close();
});
