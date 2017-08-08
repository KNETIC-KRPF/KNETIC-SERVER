const bcrypt = require('bcrypt');

const accounts =
	[
		{
			username: 'aread730',
			email: 'alexread730@gmail.com',
			password: bcrypt.hashSync('Password123', 8)
		},
		{
			username: 'ross22',
			email: 'rosskiser@gmail.com',
			password: bcrypt.hashSync('Password123', 8)
		}
	];


module.exports = accounts;
